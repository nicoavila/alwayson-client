import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { environment } from '../../../environments/environment';

@Injectable()
export class Auth0Service {

  public webAuth: any = new auth0.WebAuth({
    domain: environment.auth0.domain,
    clientID: environment.auth0.clientID,
    audience: environment.auth0.audience,
    responseType: environment.auth0.responseType,
    scope: environment.auth0.scope
  });

  constructor() { }

  /**
   * @namespace Autenticación
   * @description Autenticación en página externa con Auth0
   *
   * @returns void
   * @author Nicolas Avila
   */
  public login(redirectUri) {
    this.webAuth.authorize({
      redirectUri: redirectUri
    });
  }

  /**
   * @namespace Autenticación
   * @description Obtiene la información del usuario de Auth0
   *
   * @returns void
   * @author Nicolas Avila
   */
  public userInfo(accessToken: string, callback) {
    return this.webAuth.client.userInfo(accessToken, callback);
  }

  /**
   * @namespace Autenticación
   * @description Parsea el hash de la URL para obtener el token e información
   * de Auth0
   *
   * @returns void
   * @author Nicolas Avila
   */
  public parseHash(callback) {
    return this.webAuth.parseHash(callback);
  }

   /**
   * @namespace Autenticación
   * @description Realiza el logout del sistema
   *
   * @returns void
   * @author Nicolas Avila
   */
  public logout() {
    this.webAuth.logout({
      returnTo: environment.returnUrl,
      clientID: environment.auth0.clientID
    });
  }
}
