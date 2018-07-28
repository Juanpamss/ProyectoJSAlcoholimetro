import {Component, Input, OnInit} from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  @Input() arregloNotificacion : any = []
  @Input() arregloFiesta : any = []

  buscar : string

  fiesta: any = []

  constructor(private _servicio: ServicioAlcoholimetroService) { }

  ngOnInit() {

    this._servicio.mensajeActual.subscribe(mensaje => this.arregloNotificacion = mensaje)

    console.log('notifi:', this.arregloNotificacion)
    console.log('fiesta:', this.arregloFiesta)

    this._servicio.cambiarMensaje2(this.arregloNotificacion.length)

  }

  onNameKeyUp(event:any){

    this.buscar = event.target.value;

  }

  eliminar(indice){

    this.arregloNotificacion.splice(indice,1)

    this._servicio.cambiarMensaje(this.arregloNotificacion)

  }


}
