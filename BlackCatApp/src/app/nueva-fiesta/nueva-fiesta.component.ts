import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";
import {Alert} from "selenium-webdriver";

@Component({
  selector: 'app-nueva-fiesta',
  templateUrl: './nueva-fiesta.component.html',
  styleUrls: ['./nueva-fiesta.component.css']
})
export class NuevaFiestaComponent implements OnInit {
  model;

  invitados : any = []

  usuario: any = []

  lugar: number
  fecha: string
  horaInicioT: string
  horaFin: string
  usuariosInvitados : any =[]
  lugaresFiesta: any []

  pruebas = [

    {nombre: 'Juan', id: 1},
    {nombre: 'Pablo', id: 2},
    {nombre: 'Lauren', id: 3},
    {nombre: 'Diego', id: 4},
    {nombre: 'Maria', id: 5}

  ]

  constructor(private _servicio: ServicioAlcoholimetroService) { }

  ngOnInit() {

    this._servicio.mensajeActual3.subscribe(mensaje => this.usuario = mensaje)

    this.consultarInvitados()

  }

  textoLugar(event:any){

    this.lugar = event.target.value;

  }

  textoFecha(event:any){

    this.fecha = event.target.value;

  }

  textoHoraInicio(event:any){

    this.horaInicioT = event.target.value;

  }

  textoHoraFin(event:any){

    this.horaFin = event.target.value;

  }


  consultarInvitados(){

    this.invitados = this._servicio.retornarInvitados()
    this.lugaresFiesta = this._servicio.retornarLugares()

    console.log('YA EN FIESTA:', this.invitados)

  }


  listaInvitados(checkboxName) {

      var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
      Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
      });

      //alert(values);
      this.usuariosInvitados = values
      //console.log('invitados', this.usuariosInvitados[0])


    /*console.log('lugar', this.lugar)
    console.log('fecha', this.fecha)
    console.log('ini', this.horaInicioT)
    console.log('fin', this.horaFin)
      console.log('invitados', this.usuariosInvitados)*/

  }

  /*obtenerLugar(id){

    var lugar = <HTMLFormElement>document.getElementById('botonLugar');
    lugar.value = id
    this.lugar = lugar.value

  }*/

  cambiarTexto(textoNuevo, id){

    var lugar = <HTMLFormElement>document.getElementById('botonLugar');
    lugar.value = textoNuevo
    lugar.innerHTML = textoNuevo

    this.lugar = id

  }

  obtenerFecha(){

    var fecha = <HTMLFormElement>document.getElementById('fecha');
    this.fecha = fecha.value

  }

  crearFiesta(checkboxName){

    this.obtenerFecha()
    this.listaInvitados(checkboxName)

    console.log('usuario', this.usuario.id)
    console.log('lugar', this.lugar)
    console.log('fecha', this.fecha)
    console.log('ini', this.horaInicioT)
    console.log('fin', this.horaFin)
    console.log('invitados', this.usuariosInvitados)

    this._servicio.crearFiesta(this.usuario.id,this.lugar, this.fecha,this.horaInicioT,this.horaFin)


    for(let i=0; i<this.usuariosInvitados.length; i++){

      //console.log('invitaciones:', this.usuariosInvitados[i] + this.lugar)

      this._servicio.enviarInvitacion(this.usuariosInvitados[i], this.lugar)

    }

  }


}
