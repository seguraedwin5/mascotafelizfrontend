import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  fgvalidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'tipo': ['',[Validators.required]]
  });
  constructor(private fb: FormBuilder, private mascotaservice: MascotasService, private router:Router) { }

  ngOnInit(): void {
  }

  GuardarDatos() {
    let datos = this.fgvalidador.value;
    this.mascotaservice.CrearMascota(datos).subscribe({
      next: (datos: ModeloMascota) => {
        Swal.fire('Mascota Registrada', '', 'success');
        this.router.navigate(['/administrador/buscar-mascota'])
      },
      error: (error) => {
        Swal.fire('Error ','Hubo un error al registrar la mascota','error'); 
      }
    })
  }
}
