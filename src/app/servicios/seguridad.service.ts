import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ModeloDatos } from '../modelos/datos.modelo';
import { ModeloLogin } from '../modelos/login.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url = "http://localhost:3000";
  private datosusuario$: Subject<ModeloDatos>; //este subject va a emitir el evento de login
  private iniciosesion: boolean;

  constructor(private http: HttpClient) {
    this.datosusuario$ = new Subject<ModeloDatos>();//se inicializa el subject
    this.iniciosesion = false;
    
   }
  
  //metodos
  Login$(usuario: string, clave: string){
    
    return this.http.post<ModeloLogin>(`${this.url}/loginusuario`, { //este metodo me va a retornar los datos y el token, es lo mismo que se define en el ModeloLogin,como observable, es decir que puedo suscribir mis componentes
      usuario: usuario,
      password: clave,
    }, {
      headers: new HttpHeaders({})
    })
  };

  //a este metodo se suscriben los componentes para validar la sesion
  VerificarDatosalmacenados$():Observable<ModeloDatos>{
      return this.datosusuario$.asObservable();
  }
  /**
   * almacena la sesion en el localstorage
   */
  AlmacenarSesion(datos: ModeloLogin) {
    datos.datos!.islogged = true
    localStorage.setItem("dataSesion", JSON.stringify(datos))
    this.datosusuario$.next(datos.datos!)
  };

  ObtenerSesion() {
    let datosSesion = localStorage.getItem("dataSesion");
    if (datosSesion) {
      let datos : any = JSON.parse(datosSesion);
      return datos;
    } else {
      return false;
    }
  };

  EliminarInfoSesion() { 
    localStorage.removeItem("dataSesion");
    let datosvacios = new ModeloDatos();
    this.datosusuario$.next(datosvacios); // notifica datos vacios ya que en el local storage no va a haber nada
    
    
  };

  ObtenerToken() {
    let datos = this.ObtenerSesion();
    return datos.accesstoken
  }

  
}
