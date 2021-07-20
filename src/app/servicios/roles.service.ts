import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LmisRoles } from '../modelos/lmis-roles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  URL: string = 'https://crud-urp.herokuapp.com/roles';

  constructor(private http: HttpClient) {}

  getRol = () => fetch(this.URL).then((response) => response.json());

  getUnRol = async (id: any) => {
    let response: Response = await fetch(`${this.URL}/${id}`);
    let user: any = await response.json();
    return user;
  };

  agregarRol(permiso: LmisRoles): Observable<any> {
    return this.http.post(this.URL, permiso);
  }

  eliminarRol(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

  obtenerUnRol(id: string): Observable<any> {
    return this.http.get(`${this.URL}?id=${id}`);
  }

  editarRol(id: any, permiso: LmisRoles): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, permiso);
  }
}
