import IKeycloakConfig from './IKeycloakConfig';

export default interface IConfig {
  homePage: string;
  defaultLoginRedirectUri: string;
  defaultCookieMaxAge: number;
  // publicPages?: string[];
  privatePages: string[];
  keycloakConfig: IKeycloakConfig;
}