import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/index";
import {Router} from "@angular/router";
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  invitacionesUsuario : any = []

  fiestaUsuario : any = []

  constructor(private _http: HttpClient, private router: Router, private _servicio: ServicioAlcoholimetroService) {
  }

  private logStatus = false;
  private usuarioExistente: any []
  private estado: boolean;

  setLogguedIn(value: boolean) {
    this.logStatus = value;
  }

  get isLogguedIn() {
    return this.logStatus;
  }

  get getEstado() {
    return this.estado;
  }

  get getUsuario(){

    return this.usuarioExistente;

  }

  public consultarUsuario(correo: string, password: string) {

    this._http.get('http://localhost:1337/usuario?correo=' + correo + '&password=' + password)
      .subscribe(
        (data: any[]) => {
          //console.log(data)
          if (data.length == 0) {
            this.estado = false;
            this.ingreso(this.estado)

          } else {
            this.usuarioExistente = data[0];

            //console.log('existente AHORA: ',this.getUsuario)

            this._servicio.cambiarUsuarioLog(this.getUsuario)

            this.estado = true;
            this.ingreso(this.estado)

          }
          //console.log(this.estado)
        },
        (err) => {
          //console.log(err);
        }
      )

  }

  ingreso(estado: boolean) {
    if (estado == true) {

      //this.invitacionesUsuario = this._servicio.consultarInvitaciones()
      //this.fiestaUsuario = this._servicio.consultarFiesta()
      //console.log('invis login:', this.invitacionesUsuario)


      //this._servicio.cambiarNumNotificaciones(this.invitacionesUsuario)
      //this._servicio.cambiarFiestasCreadas(this.fiestaUsuario)

      this.setLogguedIn(estado);
      this.router.navigate(['home']);
    } else {
      alert('Credenciales no validas')
    }
  }
}
