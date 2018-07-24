import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private servicio: ServicioAlcoholimetroService) { }

  nombre: string
  apellido: string
  correo: string
  password: string
  confirmar: string

  ngOnInit() {
  }

  datosRegistro(event, formData){

    console.log(formData.value.nombre)

    this.servicio.crearUsuario(formData.value.nombre,formData.value.apellido,formData.value.correo,formData.value.password)

  }

}
