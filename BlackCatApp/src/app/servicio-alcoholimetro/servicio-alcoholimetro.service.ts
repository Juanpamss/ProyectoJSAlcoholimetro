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

  idFiesta : any = []
  lugarFiesta: any = []


  private fuenteMensaje = new BehaviorSubject<any>([]);
  mensajeActual = this.fuenteMensaje.asObservable();


  private fuenteMensaje2 = new BehaviorSubject<any>([]);
  mensajeActual2 = this.fuenteMensaje2.asObservable();

  private fuenteMensaje3 = new BehaviorSubject<any>([]);
  mensajeActual3 = this.fuenteMensaje3.asObservable();



  constructor(private httpClient: HttpClient) {
    this.usuarioExistente=[];
  }

  get getInvitaciones(){

    return this.invitaciones

  }


  cambiarMensaje(mensaje){

    this.fuenteMensaje.next(mensaje)

  }

  cambiarMensaje2(mensaje){

    this.fuenteMensaje2.next(mensaje)

  }

  cambiarMensaje3(mensaje){

    this.fuenteMensaje3.next(mensaje)

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
        //console.log(res);
      }
    );


  }

  consultarInvitaciones(idUsuario){

    this.httpClient.get(`http://localhost:1337/invitacion?usuarioIdFK=${idUsuario}`)
      .subscribe(
        (data:any[]) => {

          this.invitaciones = data

          for(let i=0; i<data.length;i++){

            this.idFiesta[i] = this.invitaciones[i].fiestaIdFK

            this.consultarFiesta(this.idFiesta[i].fiestaIdFK)

          }

          //this.cambiarMensaje(this.invitaciones)
          //this.consultarFiesta()

        }
      )

  }

  consultarFiesta(idFiesta): any[]{

    this.httpClient.get(`http://localhost:1337/fiesta/${idFiesta}`)
      .subscribe(
        (data:any[]) => {

           this.lugarFiesta.push(data)

          //this.cambiarMensaje2(this.fiesta)

        }
      )

    return this.fiesta

  }

  consultaInfoUsuario(idUsuario){

    this.consultarInvitaciones(idUsuario)

    return this.idFiesta

  }

  retornarLugarFiestas(){

    return this.lugarFiesta
  }


}


