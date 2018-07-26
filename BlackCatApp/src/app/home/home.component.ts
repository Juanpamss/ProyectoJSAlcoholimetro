import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";
import {AuthService} from "../servicios/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notificaciones : any []

  constructor(private _servicio: ServicioAlcoholimetroService) { }

  ngOnInit() {

    this.consultarInvitacionesUsuario()

  }

  consultarInvitacionesUsuario(){

    this.notificaciones = this._servicio.consultarInvitaciones()

    console.log('home:', this.notificaciones)

  }

}
