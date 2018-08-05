import {Component, Input, OnInit} from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  model;

  @Input() arregloNotificacion: any = []

  auxiliar: any = []

  buscar: string

  fiesta: any = []

  usuario: any = []


  constructor(private _servicio: ServicioAlcoholimetroService) {
  }

  ngOnInit() {

    this._servicio.usuarioLogeado.subscribe(mensaje => this.usuario = mensaje)

  }

  onNameKeyUp(event: any) {

    this.buscar = event.target.value;

  }


  eliminar(indice) {

    this.arregloNotificacion.splice(indice, 1)

  }


}
