import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "logout",
    component: CerrarSesionComponent
  },
  {
    path: 'registro',
    component: RegistroComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
