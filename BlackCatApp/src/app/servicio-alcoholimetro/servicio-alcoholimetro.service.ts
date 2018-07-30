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
  invitados: any = []
  lugares: any[]
  fiestasCreadasUsuario : any = []


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

          this.consultarInvitados()

          this.consultarLugares()

          for(let i=0; i<data.length;i++){

            this.idFiesta[i] = this.invitaciones[i].fiestaIdFK

            this.consultarFiesta(this.idFiesta[i].fiestaIdFK)

          }

        }
      )

  }

  consultarFiesta(idFiesta){

    this.httpClient.get(`http://localhost:1337/fiesta/${idFiesta}`)
      .subscribe(
        (data:any[]) => {

           this.lugarFiesta.push(data)
        }
      )

  }

  consultarInvitados(){

    this.httpClient.get('http://localhost:1337/usuario')
      .subscribe(
        (data:any[]) => {

          this.invitados = data

          console.log('CONSULTA SERVER:', this.invitados)

        }
      )

  }

  consultarLugares(){

    this.httpClient.get('http://localhost:1337/lugar')
      .subscribe(
        (data:any[]) => {

          this.lugares = data

          console.log('CONSULTA SERVER:', this.invitados)

        }
      )

  }

  crearFiesta(idCreador: number, lugar: number, fechaFiesta: string, horaInicio: string, horaFin:string){

    this.httpClient.post(`http://localhost:1337/fiesta`, {

      fechaFiesta : fechaFiesta,
      horaInicio : horaInicio,
      horaFin : horaFin,
      fiestaIdFK : lugar,
      usuarioIdFK : idCreador

    }).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  consultarFiestasCreadas(idUsuario){

    this.httpClient.get(`http://localhost:1337/fiesta?usuarioIdFK=${idUsuario}`)
      .subscribe(
        (data:any[]) => {

          this.fiestasCreadasUsuario = data

          //console.log('CONSULTA FIESTAS CREADAS:', this.fiestasCreadasUsuario)

        }
      )


  }


  consultaInfoUsuario(idUsuario){

    this.consultarInvitaciones(idUsuario)

    return this.idFiesta

  }

  enviarInvitacion(lugar:number, invitado:number){

    this.httpClient.post(`http://localhost:1337/invitacion`, {

      fiestaIdFK : lugar,
      usuarioIdFK : invitado,

    }).subscribe(
      res => {
        console.log(res);
      }
    );

  }

  retornarLugarFiestas(){

    return this.lugarFiesta
  }

  retornarInvitados(){

    return this.invitados

  }

  retornarLugares(){

    return this.lugares

  }

  retornarFiestasCreadas(idUsuario){

    this.consultarFiestasCreadas(idUsuario)

    return this.fiestasCreadasUsuario

  }

}


