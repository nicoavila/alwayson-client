import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }

  /* -------------------------------------------
  * PROYECTOS
  ------------------------------------------- */

  //Obtiene la lista de proyectos
  public getProyectos(jwtToken) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    return this.http.get(environment.apiEndpoint + 'proyectos', { headers: headers });
  }

  //Obtiene un proyecto
  public getProyecto(jwtToken, id) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    return this.http.get(environment.apiEndpoint + 'proyectos/' + id, { headers: headers });
  }

  //Crea un nuevo proyecto
  public createProyecto(jwtToken, data) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    return this.http.post(environment.apiEndpoint + 'proyectos', data, { headers: headers });
  }

  //Edita un proyecto existente
  public editProyecto(jwtToken, id, data) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    return this.http.put(environment.apiEndpoint + 'proyectos/' + id, data, { headers: headers });
  }

  //Elimina un proyecto
  public deleteProyecto(jwtToken, id) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    return this.http.delete(environment.apiEndpoint + 'proyectos/' + id, { headers: headers });
  }

  /* -------------------------------------------
  * PROYECTOS
  ------------------------------------------- */

  //Obtiene la lista de usuarios
  public getUsuarios(jwtToken) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    return this.http.get(environment.apiEndpoint + 'usuarios', { headers: headers });
  }

  /* -------------------------------------------
  * AUTH0
  ------------------------------------------- */

  //Obiene la información de un usuario
  public informacionAuth0(token, data) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(environment.apiEndpoint + 'usuarios/auth0', data, { headers: headers });
  }
}
