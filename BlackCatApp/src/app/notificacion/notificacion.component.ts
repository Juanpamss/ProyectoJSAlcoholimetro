import {Component, Input, OnInit} from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  @Input() arregloNotificacion : any[]
  @Input() arregloFiesta : any

  buscar : string

  fiesta: any[]

  constructor(private _servicio: ServicioAlcoholimetroService) { }

  ngOnInit() {

    console.log('notifi:', this.arregloNotificacion)
    console.log('fiesta:', this.arregloFiesta)

  }

  onNameKeyUp(event:any){

    this.buscar = event.target.value;

  }

  getProfile(){


  }

  /*consultarFiesta(idFiesta): any{

    this.fiesta = this._servicio.consultarFiesta(idFiesta)

    console.log('fiesta:', this.fiesta)

  }*/

}
