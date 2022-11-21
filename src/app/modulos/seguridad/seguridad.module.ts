import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CambioclaveComponent } from './cambioclave/cambioclave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component'
import { FontAwesomeModule , FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faUnlockKeyhole, faPaw } from '@fortawesome/free-solid-svg-icons'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    CambioclaveComponent,
    CerrarSesionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SweetAlert2Module,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module.forChild()
   

  ]
})
export class SeguridadModule {
  constructor( library: FaIconLibrary) {
    library.addIcons(faEnvelope,faUnlockKeyhole,faPaw);
  }
 }
