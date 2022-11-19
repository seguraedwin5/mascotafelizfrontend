import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptojs = require('crypto-js')
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor( private fb : FormBuilder, private servicioseguridad: SeguridadService) { }

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
    let clavecifrada:string = cryptojs.SHA256(password).toString();
    
    this.servicioseguridad.Login(usuario, clavecifrada).subscribe({
      next: (datos: any) => {
        
        console.log(datos.datos.nombre);
        alert('datos correctos: info - ' + datos.datos.nombre);
      },
      error: (error:any) => console.error(error)
      });
  }

}
