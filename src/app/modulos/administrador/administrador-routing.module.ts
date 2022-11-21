import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { BuscarSolicitudComponent } from './solicitudes/buscar-solicitud/buscar-solicitud.component';
import { CrearSolicitudComponent } from './solicitudes/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitudes/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitudes/eliminar-solicitud/eliminar-solicitud.component';

const routes: Routes = [
  {
    path: "crear-mascota",
    component: CrearMascotaComponent
  },
  {
    path: "editar-mascota/:id",
    component: EditarMascotaComponent
  },
  {
    path: "buscar-mascota",
    component: BuscarMascotaComponent
  },
  {
    path: "eliminar-mascota",
    component: EliminarMascotaComponent
  },
  {
    path: "crear-plan",
    component: CrearPlanComponent
  },
  {
    path: "editar-plan",
    component: EditarPlanComponent
  },
  {
    path: "buscar-plan",
    component: BuscarPlanComponent
  },
  {
    path: "eliminar-plan",
    component: EliminarPlanComponent
  },{
    path: "crear-solicitud",
    component: CrearSolicitudComponent
  },
  {
    path: "editar-solicitud",
    component: EditarSolicitudComponent
  },
  {
    path: "buscar-solicitud",
    component: BuscarSolicitudComponent
  },
  {
    path: "eliminar-solicitud",
    component: EliminarSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
