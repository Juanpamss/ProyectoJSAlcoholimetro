import {Component, Input, OnInit} from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  model;
  searchText:string;

  @Input() arregloNotificacion: any = []
  @Input() arrayNombres=[];

  //arregloNotificaciones: any = []
  auxiliar: any = []

  buscar: string

  fiesta: any = []

  usuario: any = []



  constructor(private _servicio: ServicioAlcoholimetroService) {

  }

  ngOnInit() {

    this.llenar();
    console.log(this.arrayNombres)
    console.log(this.arregloNotificacion)
    this.usuario = JSON.parse(localStorage.getItem('currentUser'));
    //this._servicio.usuarioLogeado.subscribe(mensaje => this.usuario = mensaje)


  }

  onNameKeyUp(event: any) {

    this.buscar = event.target.value;

  }


  eliminar(indice) {

    this.arregloNotificacion.splice(indice, 1)

  }

  llenar(){
    for (var i = 0; i < this.arregloNotificacion.length; i++) {
      this.arrayNombres.push(this.arregloNotificacion[i].nombre);
    }
  }

}
