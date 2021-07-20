import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LmisUsuarios } from '../modelos/lmis-usuarios';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  URL: string = 'https://crud-urp.herokuapp.com/users';

  constructor(private http: HttpClient) {}

  getUsuarios = () => fetch(this.URL).then((response) => response.json());

  getUnUsuario = async (id: any) => {
    let response: Response = await fetch(`${this.URL}/${id}`);
    let user: any = await response.json();
    return user;
  };

  agregarUsuario(usuario: LmisUsuarios): Observable<any> {
    return this.http.post(this.URL, usuario);
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

  obtenerUnUsuario(id: string): Observable<any> {
    return this.http.get(`${this.URL}?id=${id}`);
  }

  editarUsuario(id: any, usuario: LmisUsuarios): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, usuario);
  }
}
