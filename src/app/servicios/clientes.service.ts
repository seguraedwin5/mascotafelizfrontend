import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ModeloUsuario } from '../modelos/usuario.modelo';
import { environment } from 'src/environments/environment';
import { UsuariosService } from './usuarios.service';
import { ModeloCliente } from '../modelos/cliente.modelo';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = environment.apiUrl;
  idusuario: string = "";
  usuario$: Observable<ModeloCliente> = new Observable<ModeloCliente>();
  constructor(private http: HttpClient, private usuarioservice: UsuariosService) { 
   
  }
  
  
  CrearCliente$(nombre: string, apellido: string, email: string):Observable<ModeloCliente>{ 
    
    this.usuarioservice.CrearUsuario(nombre,apellido,email).subscribe({
    
      next: (user) => {
        if (user.rol === "cliente") {
          
          
          this.idusuario = user.id!
          this.usuario$ = this.http.post<ModeloCliente>(`${this.url}/clientes`, {
            idusuario: this.idusuario
          });
          
        } else {
          console.log("no es rol cliente");
        }
      },
      error: (error) => {
        console.log('no se pudo crear el usuario');
      },
      complete: () => {
        
        
      }

    
    
    
    
    });
    return this.usuario$;
  };
  BuscarCliente() { };
  EditarCliente() { };
  EliminarCliente() { };
  ListarClientes() { };
}
