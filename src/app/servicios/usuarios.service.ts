import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ModeloUsuario } from '../modelos/usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = environment.apiUrl
  constructor(private http: HttpClient) { }

  CrearUsuario(nombre: string, apellido: string, email: string) {
    
    return this.http.post<ModeloUsuario>(`${this.url}/usuarios`, {
      nombre: nombre,
      apellido: apellido,
      correo: email,
      password: "",
      rol: "cliente"
    })
  }
}