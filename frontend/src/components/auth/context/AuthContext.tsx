import React, { createContext, useEffect, useState } from "react";
import Router from "next/router";
import { LoadingData } from "bp-components";
import IUser from "../types/IUser";
import { parseToken } from "../util/util";
import config from "../util/config";
import store from "store";

const defaultContext = {
  showComponent: false,
  isAuthenticate: false,
  getUser: (): IUser | undefined => undefined,
  getToken: (): string | undefined => undefined,
  login: () => {},
  logout: () => {},
  registerURL: (): string | undefined => undefined,
  editProfileURL: (): string | undefined => undefined,
};
const AuthContext = createContext(defaultContext);

export default AuthContext;

export const AuthProvider = (props: any) => {
  const [ssoManager, setSsoManager] = useState<any>(undefined);
  const [showComponent, setShowComponent] = useState(
    defaultContext.showComponent
  );
  const [isAuthenticate, setIsAuthenticate] = useState(
    defaultContext.isAuthenticate
  );

  useEffect(() => {
    setShowComponent(false);
    initialUseEffect();
  }, []);

  const fake_login =
    process.env.NODE_ENV !== "production" && process.env.LOGIN_MODE === "fake";
  const initialUseEffect = async () => {
    try {
      let checkInterval: any = undefined;
      const keycloak = window["Keycloak"](config.keycloakConfig);
      if (fake_login) {
        const token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzZGQ1YWQzZS0zNTk4LTQ2ZTAtYjg4MS1kMzM3NWMxNTdmMGIiLCJleHAiOjE1ODc4OTgwOTYsIm5iZiI6MCwiaWF0IjoxNTg3ODg1NTIyLCJpc3MiOiJodHRwczovL2FjY291bnRzLnB1Ym5pdG8uY29tL2F1dGgvcmVhbG1zL0FjY291bnRzIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsInR5cCI6IkJlYXJlciIsImF6cCI6Imlrbml0by1yZWNlb21tZW5kZXIiLCJub25jZSI6IjQ1MWJmMDQxLWFlODItNDkyNy04NTUwLTU1MzY5M2NkMTc5ZiIsImF1dGhfdGltZSI6MTU4NzgwMTAyNSwic2Vzc2lvbl9zdGF0ZSI6ImI1MWI0MGQxLWVjMDEtNGM5YS05MGQ3LWUwNTM0MmQzZGFjYSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovLzEyNy4wLjAuMTo0MDAwIiwiaHR0cDovL25pZ2h0bHkucnMuaWtuaXRvLmNvbSIsImh0dHA6Ly9uaWdodGx5LnJzLmlrbml0by5jb206NTQwMCIsImh0dHA6Ly9uaWdodGx5LnJzLmlrbml0by5jb206NTQ1NyIsImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJNYXJrIFZpbmNlbnQiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtYXJrLnZpbmNlbnQiLCJsb2NhbGUiOiJlbiIsImdpdmVuX25hbWUiOiJNYXJrIiwiZmFtaWx5X25hbWUiOiJWaW5jZW50IiwiZW1haWwiOiJtYXJrLnZpbmNlbnRAZXhhbXBsZS5jb20ifQ.oUFVXZQi27Pbg5LcgPHg1TIN_9iDk5hmH1FEnUcLPYc";
        await _processAfterLogin(token, "");
        // await synchUser(token);
        setIsAuthenticate(true);
      } else {
        keycloak
          .init({
            onLoad: "check-sso",
            token: getToken(),
            refreshToken: getRefreshToken(),
            checkLoginIframe: true, // detect if a Single-Sign Out has occurred
          })
          .success(async (authenticated: boolean) => {
            if (authenticated) {
              await _processAfterLogin(keycloak.token, keycloak.refreshToken);
              checkInterval = _setCheckTokenInterval(keycloak);
              setShowComponent(true);
            } else {
              // remove old user
              _clearUserInStorage();
              _clearTokenInStorage();
            }
            setSsoManager(keycloak);
            setIsAuthenticate(authenticated);
          })
          .error((e) => {
            console.log("failed to initialize keyclock", e);
          });
      }

      keycloak.onAuthSuccess = () => {
        console.log("onAuthSuccess");
      };
      keycloak.onTokenExpired = () => {
        console.log("onTokenExpired");
      };
      keycloak.onAuthRefreshSuccess = () => {
        console.log("onAuthRefreshSuccess");
      };
      keycloak.onAuthRefreshError = () => {
        cleanProcess();
      };
      keycloak.onAuthLogout = () => {
        cleanProcess();
      };

      const cleanProcess = () => {
        keycloak.clearToken();
        _clearUserInStorage();
        _clearTokenInStorage();
        _clearReadRequestInStorage();
        _cleanStates();
        clearInterval(checkInterval);
        Router.push(config.homePage);
      };

      return () => {
        clearInterval(checkInterval);
      };
    } catch (e) {
      //TODO handle this error
      console.error("Error in SSO provider!", e);
    }
  };

  useEffect(
    () => {
      setShowComponent(false);
      if (fake_login) {
        setIsAuthenticate(true);
        setShowComponent(true);
      } else if (ssoManager) {
        if (_checkPrivatePage()) {
          if (_checkToken()) {
            setIsAuthenticate(true);
            setShowComponent(true);
          } else {
            const appUrl = window.location.origin;
            ssoManager.login({
              prompt: "login",
              redirectUri: `${appUrl}/login-callback?lastPage=${btoa(
                window.location.pathname + window.location.search
              )}`,
            });
          }
        } else {
          // public page
          setShowComponent(true);
        }
      } else {
        // initialUseEffect();
        setIsAuthenticate(true);
        setShowComponent(true);
      }
    },
    process.browser ? [location.pathname, ssoManager] : []
  );

  const _checkPrivatePage = () => {
    const currentPath = window.location.pathname.substr(1);
    if (currentPath === "") {
      // home page is public
      return false;
    }
    return config.privatePages.includes(currentPath);
  };

  const _checkToken = () => {
    let t: any = store.get("token");
    if (t === undefined || !t) {
      if (ssoManager && ssoManager.idToken) {
        t = ssoManager.idToken;
      } else {
        return false;
      }
    }
    const token = parseToken(t);
    const now = Math.floor(Date.now() / 1000);
    return now < token.exp;
  };

  const _processAfterLogin = async (token: string, refreshToken: string) => {
    if (!token) {
      return false;
    }
    const paresdToken = parseToken(token);

    const user: any = {
      username: paresdToken.preferred_username,
      name: paresdToken.given_name,
      family: paresdToken.family_name,
      fullName: paresdToken.name,
      id: paresdToken.sub,
      email: paresdToken.email,
    };

    _updateTokenInStorage(token);
    _updateRefreshTokenInStorage(refreshToken);
    _updateUserInStorage(user);
    //synch user!
    // await synchUser(token);
  };

  const _setCheckTokenInterval = (keycloak) => {
    if (!keycloak.token) {
      return false;
    }
    const paresdToken = parseToken(keycloak.token);
    const now = Math.floor(Date.now() / 1000);
    let period = paresdToken.exp - now - 30; // in sec
    if (period < 30) {
      period = 30;
    }

    const interval = setInterval(() => {
      keycloak
        .updateToken(60)
        .success((refreshed: boolean) => {
          if (refreshed) {
            console.log("token updated!");
            _updateTokenInStorage(keycloak.token);
            _updateRefreshTokenInStorage(keycloak.refreshToken);
          } else {
            console.log("Token is still valid");
          }
        })
        .error((e) => {
          console.log(
            "Failed to refresh the token, or the session has expired",
            e
          );
        });
    }, period * 1000);
    return interval;
  };

  const getUser = (): IUser | undefined => {
    const token = store.get("token");
    if (token == undefined) {
      return undefined;
    }
    const parsedToken = parseToken(token);
    const user: IUser = {
      username: parsedToken.preferred_username,
      name: parsedToken.given_name,
      family: parsedToken.family_name,
      fullName: parsedToken.name,
      id: parsedToken.sub,
      email: parsedToken.email,
    };
    return user;
  };

  const _updateTokenInStorage = (token: string) => {
    store.set("token", token);
  };

  const _updateRefreshTokenInStorage = (refreshToken: string) => {
    store.set("refresh_token", refreshToken);
  };

  const _updateUserInStorage = (user: any) => {
    store.set("user", user);
  };

  const _clearUserInStorage = () => {
    store.remove("user");
  };

  const _clearReadRequestInStorage = () => {
    store.remove("readRequest");
  };

  const _clearTokenInStorage = () => {
    store.remove("token");
    store.remove("refresh_token");
  };

  const _cleanStates = () => {
    setIsAuthenticate(false);
  };

  const login = () => {
    const appUrl = window.location.origin;
    console.log("ssomanagfer:", ssoManager);
    ssoManager.login({
      redirectUri: `${appUrl}/login-callback?lastPage=${btoa(
        window.location.pathname + window.location.search
      )}`,
    });
  };

  const logout = () => {
    _clearUserInStorage();
    _clearTokenInStorage();
    _clearReadRequestInStorage();
    const appUrl = window.location.origin;
    ssoManager.logout({ redirectUri: appUrl + "/logout-callback" });
  };

  const editProfileURL = () => {
    return ssoManager.createAccountUrl();
  };

  const registerURL = () => {
    const appUrl = window.location.origin;
    return ssoManager.createRegisterUrl({
      redirectUri: `${appUrl}/login-callback?lastPage=${btoa(
        window.location.pathname + config.defaultLoginRedirectUri
      )}`,
    });
  };

  const getToken = () => {
    let token: any = store.get("token");
    if (token === undefined || !token) {
      if (ssoManager && ssoManager.idToken) {
        token = ssoManager.idToken;
      } else {
        return undefined;
      }
    }
    return token;
  };

  const getRefreshToken = () => {
    const refresh_token: any = store.get("refresh_token");
    if (refresh_token) {
      return refresh_token;
    } else {
      return "";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        showComponent,
        isAuthenticate,
        login,
        logout,
        getUser,
        getToken,
        editProfileURL,
        registerURL,
      }}
    >
      <LoadingData loading={!showComponent}>
        {() => {
          return <>{props.children}</>;
        }}
      </LoadingData>
    </AuthContext.Provider>
  );
};
