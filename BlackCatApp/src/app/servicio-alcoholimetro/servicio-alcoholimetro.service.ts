import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/index";
import {stringDistance} from "codelyzer/util/utils";

@Injectable({
  providedIn: 'root'
})
export class ServicioAlcoholimetroService {

  private usuarioExistente : any = []
  private estado;
  private invitaciones : any = []

  idFiesta : any = []
  lugarFiesta: any = []
  invitados: any = []
  lugares: any = []
  fiestasCreadasUsuario : any = []
  bebidas : any = []

  fiestaFechaBusqueda : any = []

  auxiliarNotificaciones : any = []

  auxiliarNombres : any = []

  testsUsuario : any = []

  valoresArduino : any = []

  private fuenteNotificaciones = new BehaviorSubject<any>([]);
  numNotificaciones = this.fuenteNotificaciones.asObservable();


  private fuenteFiestasCreadas = new BehaviorSubject<any>([]);
  fiestasCreadas = this.fuenteFiestasCreadas.asObservable();

  private fuenteUsuarioLog = new BehaviorSubject<any>([]);
  usuarioLogeado = this.fuenteUsuarioLog.asObservable();

  private fuenteBuscarFiestaCreada = new BehaviorSubject<any>([]);
  buscarFiestaCreada = this.fuenteBuscarFiestaCreada.asObservable();

  private fuenteTests = new BehaviorSubject<any>([]);
  testsRealizados = this.fuenteTests.asObservable();

  private fuenteArduino = new BehaviorSubject<any>([]);
  valorArduino = this.fuenteArduino.asObservable();



  constructor(private httpClient: HttpClient) {
    this.usuarioExistente=[];
  }

  get getInvitaciones(){

    return this.invitaciones

  }


  cambiarNumNotificaciones(mensaje){

    this.fuenteNotificaciones.next(mensaje)

  }

  cambiarFiestasCreadas(mensaje){

    this.fuenteFiestasCreadas.next(mensaje)

  }

  cambiarUsuarioLog(mensaje){

    this.fuenteUsuarioLog.next(mensaje)

  }

  cambiarBuscarFiestaCreada(mensaje){

    this.fuenteBuscarFiestaCreada.next(mensaje)

  }

  cambiarTests(mensaje){

    this.fuenteTests.next(mensaje)

  }

  cambiarArduino(mensaje){

    this.fuenteArduino.next(mensaje)

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

          this.consultarBebidas()

          this.obtenerTestsUsuario(idUsuario)

          this.obtenerValorArduino()

          //this.auxiliarNotificaciones = []

          for(let i=0; i < data.length;i++){

            this.idFiesta[i] = this.invitaciones[i].fiestaIdFK

            this.consultarFiesta(this.idFiesta[i].fiestaIdFK)

          }

          this.cambiarNumNotificaciones(this.invitaciones.length)
        }
      )

  }

  consultarFiesta(idFiesta){

    this.httpClient.get(`http://localhost:1337/fiesta/${idFiesta}`)
      .subscribe(
        (data:any = []) => {

           this.lugarFiesta.push(data)

          this.auxiliarNotificaciones.push(
            {
              'imagenLugar': data.fiestaIdFK.imagenLugar,
              'nombre': data.fiestaIdFK.nombre,
              'fechaFiesta': data.fechaFiesta,
              'horaInicio': data.horaInicio
            })

          this.auxiliarNombres.push(
            data.fiestaIdFK.nombre
          )

        }
      )

  }

  consultarInvitados(){

    this.httpClient.get('http://localhost:1337/usuario')
      .subscribe(
        (data:any[]) => {

          this.invitados = data

          //console.log('CONSULTA SERVER:', this.invitados)

        }
      )

  }

  consultarLugares(){

    this.httpClient.get('http://localhost:1337/lugar')
      .subscribe(
        (data:any[]) => {

          this.lugares = data

          //console.log('CONSULTA SERVER:', this.invitados)

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
        //console.log(res);
      }
    );
  }

  consultarFiestasCreadas(idUsuario){

    this.httpClient.get(`http://localhost:1337/fiesta?usuarioIdFK=${idUsuario}`)
      .subscribe(
        (data:any[]) => {

          this.fiestasCreadasUsuario = data

          this.cambiarFiestasCreadas(this.fiestasCreadasUsuario)

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
        //console.log(res);
      }
    );

  }

  consultarBebidas(){

    this.httpClient.get(`http://localhost:1337/bebida`)
      .subscribe(
        (data:any[]) => {

          this.bebidas = data

          //console.log('CONSULTA FIESTAS CREADAS:', this.fiestasCreadasUsuario)

        }
      )
  }

  enviarPedido(cantidad: number, usuario: number, bebida:number){

    this.httpClient.post(`http://localhost:1337/pedido`, {

      cantidad : cantidad,
      usuarioIdFK : usuario,
      bebidaIdFK : bebida

    }).subscribe(
      res => {
        //console.log(res);
      }
    );

  }


  buscarPorFecha(usuario: number, fecha: string){

    this.httpClient.get(`http://localhost:1337/fiesta?usuarioIdFK=${usuario}&fechaFiesta=${fecha}`)
      .subscribe(
        (data:any[]) => {

          this.fiestaFechaBusqueda = data

          this.cambiarBuscarFiestaCreada(this.fiestaFechaBusqueda)

        }

      )
  }

  actualizarInfoUsuario(id: number, nombre: string, apellido: string, correo: string, password: string){

    this.httpClient.put(`http://localhost:1337/usuario/${id}`, {

      nombre : nombre,
      apellido : apellido,
      correo : correo,
      password : password

    }).subscribe(
      res => {
        //console.log(res);
      }
    );

  }

  obtenerValorArduino(){

    this.httpClient.get(`http://localhost:1338/sensor`)
      .subscribe(
        (data:any[]) => {

          this.valoresArduino = data

          this.cambiarArduino(this.valoresArduino)

        }

      )
  }

  obtenerTestsUsuario(usuario: number){

    this.httpClient.get(`http://localhost:1337/test?testIdFK=${usuario}`)
      .subscribe(
        (data:any[]) => {

          this.testsUsuario = data

          this.cambiarTests(data)

        }

      )
  }

  guardarTest(grado: number, hora: string, usuario:number){

    this.httpClient.post(`http://localhost:1337/test`, {

      gradoAlcohol : grado,
      horaTest : hora,
      testIdFK : usuario

    }).subscribe(
      res => {
        //console.log(res);

      }
    );

    this.obtenerTestsUsuario(usuario)

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

  retornarBebidas(){

    return this.bebidas

  }

  retornarBuscarFecha(usuario: number, fecha: string){

    this.buscarPorFecha(usuario, fecha)

    return this.fiestaFechaBusqueda

  }

  retornarAuxililarNotificaciones(){

    return this.auxiliarNotificaciones

  }

  retornarAuxililarNombres(){

    return this.auxiliarNombres

  }

  retornarTests(usuario: number){

    this.obtenerTestsUsuario(usuario)

    //console.log('en metodo test: ', this.testsUsuario)

    return this.testsUsuario

  }

  retornarValoresArduino(){

    this.obtenerValorArduino()

    return this.valoresArduino

  }

}


