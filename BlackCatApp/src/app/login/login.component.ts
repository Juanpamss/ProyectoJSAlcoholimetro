import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {AuthService} from "../servicios/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  correo1: string;
  password1: string;
  estado: boolean;
  fiestaUsuario: any = []
  invitacionesUsuario: any = []
  usuarioCorrecto = []


  constructor(private http: HttpClient, private _auth: AuthService, private router: Router, private formBuilder: FormBuilder,
              private route: ActivatedRoute,) {
    this.estado = false;

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
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


  ingreso(estado: boolean) {
    if (estado == true) {

      //this._servicio.cambiarMensaje3(this._auth.getUsuario)

      //this.invitacionesUsuario = this._servicio.consultarInvitaciones()
      //this.fiestaUsuario = this._servicio.consultarFiesta()

      //console.log('invis login:', this.invitacionesUsuario)
      //this._servicio.cambiarMensaje(this.invitacionesUsuario)
      //this._servicio.cambiarMensaje2(this.fiestaUsuario)


    }

  }


    onSubmit(){
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
      }


      this._auth.consultarUsuario(this.loginForm.value.correo, this.loginForm.value.password);


      //this.loading = true;

    }

}
