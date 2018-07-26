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
  fiestas : any []

  constructor(private _servicio: ServicioAlcoholimetroService) {

  }

  ngOnInit() {

  }

  consultarInvitacionesUsuario(){

    this.notificaciones = this._servicio.consultarInvitaciones()

    console.log('arreglo invitacion:', this.notificaciones)

    this.consultarFiesta()

  }

  consultarFiesta(){

    //this.notificaciones[0].fiestaIdFK.fiestaIdFK

    this.fiestas = this._servicio.consultarFiesta()

    console.log('arreglo fiesta:', this.fiestas)

  }

}
