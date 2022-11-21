import { Component, OnInit } from '@angular/core';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnInit {

  listadomascotas:ModeloMascota[] = []

  constructor(private serviciomascotas:MascotasService) { }

  ngOnInit(): void {
    this.ObtenerlistadoMascotas();
  }


  ObtenerlistadoMascotas() {
    this.serviciomascotas.ListarMascotas$().subscribe({
      next: (datos: ModeloMascota[]) => {
        console.log(datos);
        this.listadomascotas = datos;
      }
    })
  }
}
