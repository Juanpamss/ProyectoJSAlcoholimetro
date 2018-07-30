import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-admin-fiesta',
  templateUrl: './admin-fiesta.component.html',
  styleUrls: ['./admin-fiesta.component.css']
})
export class AdminFiestaComponent implements OnInit {

  fiestasCreadas : any = []
  usuario : any = []

  constructor(private _servicio: ServicioAlcoholimetroService) { }

  ngOnInit() {

    this._servicio.mensajeActual3.subscribe(mensaje => this.usuario = mensaje)

    this.consultarFiestasCreadas()

  }

  consultarFiestasCreadas(){

    this.fiestasCreadas = this._servicio.retornarFiestasCreadas(this.usuario.id)

    console.log('ADMIN FIESTA:', this.fiestasCreadas)

  }

}
