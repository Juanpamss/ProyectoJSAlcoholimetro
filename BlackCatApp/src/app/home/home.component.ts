import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";
import {AuthService} from "../servicios/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notificaciones : any = []
  fiestas : any = []
  usuario: any = []
  id: number = 0

  invitados : any = []

  fiestasCreadas : any []

  numNotificaciones : number

  bebidas : any []

  final : any []


  constructor(private _servicio: ServicioAlcoholimetroService) {

  }

  ngOnInit() {

    this._servicio.usuarioLogeado.subscribe(mensaje => this.usuario = mensaje)

    //console.log('usuario ingresado YA EN HOME: ', this.usuario)

    this._servicio.auxiliarNotificaciones = []

    this.consultarInvitacionesUsuario()

  }


  consultarInvitacionesUsuario(){

    this.id = this.usuario.id

    this.notificaciones = this._servicio.consultaInfoUsuario(this.id)

    this.fiestas = this._servicio.retornarLugarFiestas()

    this.invitados = this._servicio.retornarInvitados()

    this.fiestasCreadas = this._servicio.retornarFiestasCreadas(this.id)

    this.bebidas = this._servicio.retornarBebidas()

    this.final = this._servicio.retornarAuxililarNotificaciones()


    //this._servicio.cambiarFiestasCreadas(this.notificaciones.length)

    /*console.log('POR FA INVIS: ',this.notificaciones)

    console.log('POR FA LUGARES: ',this.fiestas)

    console.log('POR FA INVITADOS: ',this.invitados)*/

    //console.log('POR FA CREADAS: ',this.fiestasCreadas)

  }


}
