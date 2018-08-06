import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  usuario : any = []

  registerForm: FormGroup;

  constructor(private _servicio : ServicioAlcoholimetroService) { }

  ngOnInit() {

    this.usuario = JSON.parse(localStorage.getItem('currentUser'));
    //this._servicio.usuarioLogeado.subscribe(mensaje => this.usuario = mensaje)
  }

}
