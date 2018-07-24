import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: string
  password: string

  constructor(private _servicioAlcoholimetro:ServicioAlcoholimetroService) { }

  ngOnInit() {
  }

  consultaUsuario(event, formData){
    console.log(event);
    console.log(formData.value);
    //this.correo=formData.value.correo.toString();
    //this.password=formData.value.password.toString();

    //this._servicioAlcoholimetro.consultarUsuario(this.correo, this.password);

  }


}
