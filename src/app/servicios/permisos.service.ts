import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LmisPermisos } from '../modelos/lmis-permisos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PermisosService {
  URL: string = 'https://crud-urp.herokuapp.com/permissions';

  constructor(private http: HttpClient) {}

  getPermisos = () => fetch(this.URL).then((response) => response.json());

  getUnPermiso = async (id: any) => {
    let response: Response = await fetch(`${this.URL}/${id}`);
    let user: any = await response.json();
    return user;
  };

  agregarPermiso(permiso: LmisPermisos): Observable<any> {
    return this.http.post(this.URL, permiso);
  }

  eliminarPermiso(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

  obtenerUnPermiso(id: string): Observable<any> {
    return this.http.get(`${this.URL}?id=${id}`);
  }

  editarPermiso(id: any, permiso: LmisPermisos): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, permiso);
  }
}
