import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import Swal from 'sweetalert2'; 

const cryptojs = require('crypto-js')
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('deleteSwal')
  public readonly deleteswal!:SwalComponent 
  
  constructor( private fb : FormBuilder, private servicioseguridad: SeguridadService, private router:Router) { }

  ngOnInit(): void {
    
  }

  //validacion formulario
  fgvalidator: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],//[valor predeterminado del campo:string, validadores]
    'password': ['', [Validators.required]]
  });

  IdentificarUsuario() {
    let usuario:string = this.fgvalidator.controls['usuario'].value;
    let password:string = this.fgvalidator.controls['password'].value;
    let clavecifrada: string = cryptojs.SHA256(password).toString();
    
    this.servicioseguridad.Login$(usuario, clavecifrada).subscribe({
      next: (datos: any) => {
        //guardar datos y token en local storage
        this.servicioseguridad.AlmacenarSesion(datos);
        this.router.navigate(['/inicio']);
      
        Swal.fire('Sesion iniciada', `Bienvenido ${datos.datos.nombre}`, 'success');
      },
      error: (error: any) => {
        Swal.fire('Error', `Datos Incorrectos`, 'error');
      }
      });
  }

}
