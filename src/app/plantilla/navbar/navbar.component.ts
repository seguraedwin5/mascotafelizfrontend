import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloDatos } from 'src/app/modelos/datos.modelo';
import { ModeloLogin } from 'src/app/modelos/login.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false;
  rol: string = "";
  correo: string = "";
  
  constructor( private seguridadservice:SeguridadService) { }

  ngOnInit(): void {
    this.seguridadservice.VerificarDatosalmacenados$().subscribe({
      next: (datos) => {
        this.isLogged = datos.islogged!;
        this.rol = datos.rol!;
        this.correo = datos.correo!;

      }
    });

   
  }

 
  }


