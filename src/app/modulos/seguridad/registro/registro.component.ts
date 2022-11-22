import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { ClientesService } from 'src/app/servicios/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  fgvalidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'apellido': ['',[]],
    'email':['',[Validators.email,Validators.required]]
    
  })
  constructor(private fb:FormBuilder, private clienteservice: ClientesService, private router:Router) { }

  ngOnInit(): void {
    
  }

  RegistrarCliente() {
    let datoscliente = this.fgvalidador.value;
    this.clienteservice.CrearCliente$(datoscliente.nombre, datoscliente.apellido, datoscliente.email).subscribe({
      next: (cliente) => {
        let idcliente = cliente.id;
        Swal.fire("Cliente Creado Correctamente", `id cliente: ${idcliente}`, 'success');
      },
      error: (err) => {
        Swal.fire("Error", "No se pudo Crear el cliente", "error");
      }
    });
  }

}
