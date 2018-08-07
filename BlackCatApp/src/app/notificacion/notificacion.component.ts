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

  final : any []

  auxNombres : any = []

  arregloNotificacion: any = []
  arrayNombres=[];

  //arregloNotificaciones: any = []
  auxiliar: any = []

  buscar: string

  fiesta: any = []

  usuario: any = []

  lugaresFiesta : any = []

  arreglito = ["Bipolar","Bunga","Hash"]


  constructor(private _servicio: ServicioAlcoholimetroService) {

  }

  ngOnInit() {

    this.llenar();
    console.log(this.arrayNombres)
    console.log(this.arregloNotificacion)
    this.usuario = JSON.parse(localStorage.getItem('currentUser'));
    //this._servicio.usuarioLogeado.subscribe(mensaje => this.usuario = mensaje)

    this.buscarLugar()

    console.log('lugar fiesta',this.lugaresFiesta)
    this.inicio();

  }

  inicio(){
    this.arregloNotificacion = this._servicio.retornarAuxililarNotificaciones()

    this.arrayNombres = this._servicio.retornarAuxililarNombres()
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

  buscarLugar(){

    this.lugaresFiesta = this._servicio.retornarLugares()

  }



}
