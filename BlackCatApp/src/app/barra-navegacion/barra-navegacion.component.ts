import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";
import {AuthService} from "../servicios/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {relativeToRootDirs} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  usuario : any = []

  constructor(private _servicio: ServicioAlcoholimetroService, private servicio: AuthService,private route: ActivatedRoute, private router: Router) { }

  notificaciones : number

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('currentUser'));

    this._servicio.numNotificaciones.subscribe(mensaje => this.notificaciones = mensaje)
    //this._servicio.usuarioLogeado.subscribe(mensaje => this.usuario = mensaje)

  }

  salir(){
    this.servicio.logout();
  }

  irAdminFiesta(){
    this.router.navigate(['administrarFiesta'], {relativeTo: this.route})
  }

  irTest(){
    this.router.navigate(['test'], {relativeTo: this.route})
  }

  irHome(){
    this.router.navigate(['home'], {relativeTo: this.route})
  }

  irInfoUsuario(){
    this.router.navigate(['informacionUsuario'], {relativeTo: this.route})
  }

  irNuevaFiesta(){
    //this.router.navigate(['/usuario',JSON.parse(localStorage.getItem('currentUser')).id,'home','/crearNuevaFiesta']);
    this.router.navigate(['crearNuevaFiesta'], {relativeTo: this.route})
  }

  irEditarUsuario(){
    //this.router.navigate(['/usuario',JSON.parse(localStorage.getItem('currentUser')).id,'home','/crearNuevaFiesta']);
    this.router.navigate(['editarUsuario'], {relativeTo: this.route})
  }

}
