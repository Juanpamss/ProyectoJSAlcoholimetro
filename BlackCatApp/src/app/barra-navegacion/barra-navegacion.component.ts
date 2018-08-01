import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  usuario : any = []

  constructor(private _servicio: ServicioAlcoholimetroService) { }

  ngOnInit() {

    this._servicio.usuarioLogeado.subscribe(mensaje => this.usuario = mensaje)

  }

}
