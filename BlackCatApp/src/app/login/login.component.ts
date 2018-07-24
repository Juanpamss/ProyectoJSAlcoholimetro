import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: string
  password: string

  constructor(private _servicioAlcoholimetro:ServicioAlcoholimetroService, private router:Router) { }

  ngOnInit() {
  }

  consultaUsuario(event, formData){
    console.log(event);
    console.log(formData.value);


    this._servicioAlcoholimetro.consultarUsuario(this.correo, this.password);
    console.log(this._servicioAlcoholimetro.usuarioExistente);
    if(this._servicioAlcoholimetro.usuarioExistente==null){
      alert('vrg')
    }else{
      this._servicioAlcoholimetro.setLogguedIn(true);
      this.router.navigate(['home']);
    }

  }


}
