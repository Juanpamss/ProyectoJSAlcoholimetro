import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private servicio: ServicioAlcoholimetroService,private formBuilder: FormBuilder,
              private router: Router) { }

  nombre: string
  apellido: string
  correo: string
  password: string
  confirmar: string

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  datosRegistro(event, formData){

    console.log(formData.value.nombre)

    this.servicio.crearUsuario(formData.value.nombre,formData.value.apellido,formData.value.correo,formData.value.password)

  }



  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.servicio.crearUsuario(this.registerForm.value.nombre,this.registerForm.value.apellido,this.registerForm.value.correo,this.registerForm.value.password)
    this.router.navigate(['login']);
    //this.alert.success('Registration successful', true);
  }

}

