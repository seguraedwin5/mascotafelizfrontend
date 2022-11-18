import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path: "seguridad",
    loadChildren: () => { //funcion que importa la ruta del componente
      return import("./modulos/seguridad/seguridad.module").then(m => m.SeguridadModule);
    }
  },
  {
    path: "administrador",
    loadChildren: () => import("./modulos/administrador/administrador.module").then(m => m.AdministradorModule)
  },
  {
    path: "**",
    component: ErrorComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
