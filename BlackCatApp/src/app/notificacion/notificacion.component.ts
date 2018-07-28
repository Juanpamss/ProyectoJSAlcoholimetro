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

  auxiliar: any = []

  buscar : string

  fiesta: any = []



  constructor(private _servicio: ServicioAlcoholimetroService) { }

  ngOnInit() {

    //console.log('notifi:', this.arregloNotificacion)
    //console.log('fiesta:', this.arregloFiesta)

    //this.crearlo()

  }

  onNameKeyUp(event:any){

    this.buscar = event.target.value;

  }

  eliminar(indice){

    this.arregloNotificacion.splice(indice,1)

    this._servicio.cambiarMensaje(this.arregloNotificacion)

  }

  crearlo(){

    console.log('tamaño:', this.arregloNotificacion)

    for(let i=0; i < this.arregloNotificacion.length; i++){

      this.auxiliar.push(
        {
          'imagenLugar': this.arregloFiesta[i].fiestaIdFK.imagenLugar,
          'nombre': this.arregloFiesta[i].fiestaIdFK.nombre,
          'fechaFiesta': this.arregloFiesta[i].fechaFiesta,
          'horaInicio': this.arregloFiesta[i].horaInicio
        })
    }

    console.log('MIO: ', console.log(this.auxiliar))

  }


}
