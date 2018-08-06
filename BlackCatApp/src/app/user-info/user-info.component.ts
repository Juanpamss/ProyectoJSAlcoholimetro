import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  usuario : any = []

  constructor(private _servicio : ServicioAlcoholimetroService) { }

  ngOnInit() {


    this._servicio.usuarioLogeado.subscribe(mensaje => this.usuario = mensaje)
  }

}
