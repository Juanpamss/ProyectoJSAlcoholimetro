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
  usuarioExistente=[]

<<<<<<< HEAD
  constructor(private http: HttpClient,private _auth: AuthService, private router:Router) {
    this.estado=false;
=======
  constructor(private _auth: AuthService, private router: Router) {
>>>>>>> 4f741871a632776ef986cd29c968a843ce8e86ae
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

<<<<<<< HEAD
    this._auth.consultarUsuario(correo,password);

    console.log(this.estado)
    //this.ingreso(this.estado);
=======
    this._auth.consultarUsuario(correo, password);
    //console.log(this._auth.getEstado)
    this.ingreso(this._auth.getEstado);
>>>>>>> 4f741871a632776ef986cd29c968a843ce8e86ae
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

<<<<<<< HEAD
=======
  ingreso(estado: boolean) {
    if (estado == true) {
      this._auth.setLogguedIn(true);
      this.router.navigate(['home']);
    } else {
      alert('Credenciales no validas')
    }


  }

>>>>>>> 4f741871a632776ef986cd29c968a843ce8e86ae
}
