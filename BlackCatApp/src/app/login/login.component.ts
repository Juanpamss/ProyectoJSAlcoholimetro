import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";
import {Router} from "@angular/router";
import {AuthService} from "../servicios/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo1: string;
  password1: string;
  estado: boolean;
  fiestaUsuario: any = []
  invitacionesUsuario: any = []


  constructor(private http: HttpClient,private _auth: AuthService, private router:Router, private _servicio: ServicioAlcoholimetroService) {
    this.estado = false;

  }

  ngOnInit() {

  }

  ingresoUsuario(event, formData) {
    //console.log(event);
    //console.log('form', formData.value.correo);

    event.preventDefault();
    const target = event.target
    const correo = target.querySelector('#correo').value
    const password = target.querySelector('#password').value

    this._auth.consultarUsuario(correo, password);

  }


}
