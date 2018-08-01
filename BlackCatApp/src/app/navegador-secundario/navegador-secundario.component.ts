import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-navegador-secundario',
  templateUrl: './navegador-secundario.component.html',
  styleUrls: ['./navegador-secundario.component.css']
})
export class NavegadorSecundarioComponent implements OnInit {

  notificaciones : number

  constructor(private _servicio: ServicioAlcoholimetroService) { }

  ngOnInit() {

    this._servicio.numNotificaciones.subscribe(mensaje => this.notificaciones = mensaje)

  }

}
