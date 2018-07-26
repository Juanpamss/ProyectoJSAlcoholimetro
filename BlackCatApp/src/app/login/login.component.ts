import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";
import {Router} from "@angular/router";
import {AuthService} from "../servicios/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo1: string;
  password1: string;
  estado: boolean;

  constructor(private _auth: AuthService, private router: Router) {
  }

  ngOnInit() {

  }


  ingresoUsuario(event, formData) {
    //console.log(event);
    //console.log('form', formData.value.correo);

    const target = event.target
    const correo = target.querySelector('#correo').value
    const password = target.querySelector('#password').value

    this._auth.consultarUsuario(correo, password);
    //console.log(this._auth.getEstado)
    this.ingreso(this._auth.getEstado);
    //this.estado=this._auth.getEstado;
    //console.log('form',this._servicioAlcoholimetro.getUsuario);

    //console.log(this._servicioAlcoholimetro.getUsuario);
    /*if(this.estado==true){
      this._auth.setLogguedIn(true);
      this.router.navigate(['home']);
    }else{
      alert('Credenciales no validas')
    }*/


  }

  ingreso(estado: boolean) {
    if (estado == true) {
      this._auth.setLogguedIn(true);
      this.router.navigate(['home']);
    } else {
      alert('Credenciales no validas')
    }


  }

}
