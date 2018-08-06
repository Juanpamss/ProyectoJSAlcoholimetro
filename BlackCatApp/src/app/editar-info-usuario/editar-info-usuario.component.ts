import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-editar-info-usuario',
  templateUrl: './editar-info-usuario.component.html',
  styleUrls: ['./editar-info-usuario.component.css']
})
export class EditarInfoUsuarioComponent implements OnInit {

  formEditar: FormGroup;

  submitted = false;

  usuario : any = []

  nombre: string
  apellido: string
  correo: string
  password: string

  constructor(private formBuilder: FormBuilder, private _servicio: ServicioAlcoholimetroService) { }

  ngOnInit() {

    this.usuario = JSON.parse(localStorage.getItem('currentUser'));

    this.formEditar = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  datos(){

    this.nombre = this.formEditar.value.nombre
    this.apellido = this.formEditar.value.apellido
    this.correo = this.formEditar.value.correo
    this.password = this.formEditar.value.password

  }

  get f() { return this.formEditar.controls; }

  editarUsuario(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.formEditar.invalid) {
      return;
    }

    this.datos()

    console.log(this.formEditar.value.nombre,this.formEditar.value.apellido,this.formEditar.value.correo,this.formEditar.value.password)

    this._servicio.actualizarInfoUsuario(this.usuario.id, this.nombre, this.apellido, this.correo, this.password)

  }

}
