// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth0: {
    domain: 'nicoavila.auth0.com',
    clientID: 'x568hv1fgFUsSilzptJfCTbNfT0rv4YU',
    connection: 'Username-Password-Authentication',
    audience: 'https://nicoavila.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile email user_metadata'
  },
  returnUrl: 'http://localhost:4200',
  apiEndpoint: 'http://api.nicoavila.cl/'
};
