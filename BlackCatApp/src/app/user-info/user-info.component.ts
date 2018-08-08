import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  usuario : any = []

  registerForm: FormGroup;

  constructor(private _servicio : ServicioAlcoholimetroService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.usuario = JSON.parse(localStorage.getItem('currentUser'));
    //this._servicio.usuarioLogeado.subscribe(mensaje => this.usuario = mensaje)
  }

  irEditar(){
    //this.router.navigate(['/usuario',JSON.parse(localStorage.getItem('currentUser')).id,'home','/crearNuevaFiesta']);
    this.router.navigate(['/usuario',JSON.parse(localStorage.getItem('currentUser')).id,'home']);
  }
}
