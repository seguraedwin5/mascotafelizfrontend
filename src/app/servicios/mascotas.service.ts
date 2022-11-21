import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMascota } from '../modelos/mascota.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  url = "http://localhost:3000";
  token: string = '';

  constructor(private http: HttpClient, servicioseguridad: SeguridadService) { 
    this.token = servicioseguridad.ObtenerToken();
  }
  
  
  ListarMascotas$() :Observable<ModeloMascota[]> {
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas`);
  }

  CrearMascota(pmascota: ModeloMascota): Observable<ModeloMascota> {
    return this.http.post(`${this.url}/mascotas`, pmascota, {
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}` 
      })
    });
   }
  
  EditarMascota(pmascota: ModeloMascota): Observable<ModeloMascota> {
    return this.http.put(`${this.url}/mascotas`, pmascota, {
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}` 
      })
    });};
  
  EliminarMascota(id: string): Observable<ModeloMascota> {
    return this.http.delete(`${this.url}/mascotas/{id}`, {
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}` 
      })
    });};
}

