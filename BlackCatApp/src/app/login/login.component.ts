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


    this._auth.consultarUsuario(correo,password);

    //console.log(this.estado)
    //this.ingreso(this.estado);

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

      this.invitacionesUsuario = this._servicio.consultarInvitaciones()
      this.fiestaUsuario = this._servicio.consultarFiesta()

      console.log('invis login:', this.invitacionesUsuario)
      this._servicio.cambiarMensaje(this.invitacionesUsuario)
      this._servicio.cambiarMensaje2(this.fiestaUsuario)


      this._auth.setLogguedIn(true);
      this.router.navigate(['home']);
    } else {
      alert('Credenciales no validas')
    }


  }

}
