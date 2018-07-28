import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ServicioAlcoholimetroService {

  private usuarioExistente : any = []
  private fiesta : any = []
  private estado;
  private invitaciones : any = []


  private fuenteMensaje = new BehaviorSubject<any>([]);
  mensajeActual = this.fuenteMensaje.asObservable();


  private fuenteMensaje2 = new BehaviorSubject<any>([]);
  mensajeActual2 = this.fuenteMensaje2.asObservable();



  constructor(private httpClient: HttpClient) {
    this.usuarioExistente=[];
  }


  cambiarMensaje(mensaje){

    this.fuenteMensaje.next(mensaje)

  }

  cambiarMensaje2(mensaje){

    this.fuenteMensaje2.next(mensaje)

  }

   public consultarUsuario(correo: string, password: string){

    this.httpClient.get('http://localhost:1337/usuario?correo='+correo+'&password='+password)
      .subscribe(
        (data:any[]) => {
          this.usuarioExistente = data
          if(data.length==0){
           this.estado=false;

          }else{
            this.usuarioExistente = data[0];
            this.estado= true;
          }

        }
      )

  }

  crearUsuario(nombre: string, apellido: string, correo: string, password: string){

    this.httpClient.post(`http://localhost:1337/usuario`, {

      nombre : nombre,
      apellido: apellido,
      correo: correo,
      password : password

    }).subscribe(
      res => {
        console.log(res);
      }
    );


  }

  consultarInvitaciones(): any[]{

    this.httpClient.get('http://localhost:1337/invitacion?usuarioIdFK=1')
      .subscribe(
        (data:any[]) => {

          this.invitaciones = data

          this.cambiarMensaje(this.invitaciones)
          this.consultarFiesta()

        }
      )

      return this.invitaciones

  }

  consultarFiesta(): any[]{

    this.httpClient.get('http://localhost:1337/fiesta/2')
      .subscribe(
        (data:any[]) => {

           this.fiesta = data

          this.cambiarMensaje2(this.fiesta)

        }
      )

    return this.fiesta

  }




}


