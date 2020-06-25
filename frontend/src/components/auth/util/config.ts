import IConfig from '../types/IConfig';

const config: IConfig = {
  defaultLoginRedirectUri: '/index',
  defaultCookieMaxAge: 30 * 24 * 60 * 60,
  homePage: '/index',
  privatePages: [
    'profile',
  ],
  keycloakConfig: {
    url: 'https://nightly.accounts.pubnito.com/auth/',
    realm: 'Accounts',
    clientId: 'edupack',
  },
};

export default config;
