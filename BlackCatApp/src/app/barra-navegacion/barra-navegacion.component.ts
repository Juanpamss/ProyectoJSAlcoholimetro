import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";
import {AuthService} from "../servicios/auth.service";

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  usuario : any = []

  constructor(private _servicio: ServicioAlcoholimetroService, private servicio: AuthService) { }

  notificaciones : number

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('currentUser'));

    this._servicio.numNotificaciones.subscribe(mensaje => this.notificaciones = mensaje)
    //this._servicio.usuarioLogeado.subscribe(mensaje => this.usuario = mensaje)

  }

  salir(){
    this.servicio.logout();
  }

}
