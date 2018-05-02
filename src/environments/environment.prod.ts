export const environment = {
  production: true,
  auth0: {
    domain: 'nicoavila.auth0.com',
    clientID: 'x568hv1fgFUsSilzptJfCTbNfT0rv4YU',
    connection: 'Username-Password-Authentication',
    audience: 'https://nicoavila.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile email user_metadata'
  },
  returnUrl: 'http://localhost:4200',
  apiEndpoint: 'http://localhost:3000/'
};
