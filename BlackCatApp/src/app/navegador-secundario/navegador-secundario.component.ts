import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-navegador-secundario',
  templateUrl: './navegador-secundario.component.html',
  styleUrls: ['./navegador-secundario.component.css']
})
export class NavegadorSecundarioComponent implements OnInit {

  notificaciones : any[] = [{nombre : "Hola"}]

  constructor(private _servicio: ServicioAlcoholimetroService) { }

  ngOnInit() {

    this._servicio.mensajeActual.subscribe(mensaje => this.notificaciones = mensaje)

  }

}
