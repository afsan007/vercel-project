import React from "react";
import { ProfileMenu } from "./ProfileMenu";

export default {
  title: "ATOMS | Profile / ProfileMenu",
  component: ProfileMenu,
};

const login = () => alert("Login");
const logout = () => alert("logout");

export const LogIn = () => {
  return (
    <ProfileMenu
      email=""
      anchorEl={<button></button>}
      login={login}
      logout={logout}
    ></ProfileMenu>
  );
};

export const LogOut = () => {
  return (
    <ProfileMenu
      email="a.email@gmil.com"
      anchorEl={<button></button>}
      login={login}
      logout={logout}
    ></ProfileMenu>
  );
};
