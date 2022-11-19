import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloLogin } from '../modelos/login.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  
  //metodos
  Login(usuario: string, clave: string): Observable<ModeloLogin> {
    console.log(clave)
    return this.http.post<ModeloLogin>(`${this.url}/loginusuario`, {
      usuario: usuario,
      password: clave,
    }, {
      headers: new HttpHeaders({})
    })
  }
}
