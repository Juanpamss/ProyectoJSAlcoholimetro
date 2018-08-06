import {Component, OnInit} from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";
import {Alert} from "selenium-webdriver";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-nueva-fiesta',
  templateUrl: './nueva-fiesta.component.html',
  styleUrls: ['./nueva-fiesta.component.css']
})
export class NuevaFiestaComponent implements OnInit {
  model;

  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 21) {
      return {tooEarly: true};
    }
    if (value.hour >= 23) {
      return {tooLate: true};
    }

    return null;
  });

  ctrl2 = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 24 && value.hour > 5) {
      return {tooEarly: true};
    }
    if (value.hour > 3 && value.hour < 5) {
      return {tooLate: true};
    }

    return null;
  });

  invitados: any = []

  usuario: any = []

  bebidas: any = []

  lugar: number
  fecha: string
  horaInicioF: string
  horaFin: string
  usuariosInvitados: any = []
  lugaresFiesta: any []
  bebidasSeleccionadas: any = []
  cantidadBotellas: any = []

  cantidad = [

    {cant: 1},
    {cant: 2},
    {cant: 3},
    {cant: 4},
    {cant: 5},
    {cant: 6}

  ]

  pruebas = [

    {nombre: 'Juan', id: 1},
    {nombre: 'Pablo', id: 2},
    {nombre: 'Lauren', id: 3},
    {nombre: 'Diego', id: 4},
    {nombre: 'Maria', id: 5}

  ]

  pruebasBote = [

    {descripcion: 'Juan', id: 1},
    {descripcion: 'Pablo', id: 2},
    {descripcion: 'Lauren', id: 3},
    {descripcion: 'Diego', id: 4},
    {descripcion: 'Maria', id: 5}

  ]


  constructor(private _servicio: ServicioAlcoholimetroService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    //this._servicio.usuarioLogeado.subscribe(mensaje => this.usuario = mensaje)
    this.usuario = JSON.parse(localStorage.getItem('currentUser'));
    this.consultarInvitados()

    this.quitarUsuario()



  }

  quitarUsuario(){

    for (let i=0; i < this.invitados.length; i++){

      if(this.invitados[i].nombre == this.usuario.nombre){

        this.invitados.splice(i,1);

      }

    }

  }


  consultarInvitados() {

    this.invitados = this._servicio.retornarInvitados()
    this.lugaresFiesta = this._servicio.retornarLugares()
    this.bebidas = this._servicio.retornarBebidas()

  }


  listaInvitados(checkboxName) {

    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function (el) {
      values.push(el.value);
    });

    this.usuariosInvitados = values

    //this.imprimir()


  }

  listaBebidas(checkboxName2) {

    var checkboxes2 = document.querySelectorAll('input[name="' + checkboxName2 + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes2, function (el) {
      values.push(el.value);
    });

    this.bebidasSeleccionadas = values

    //this.imprimir()

  }

  listaCantidad(checkboxName3) {

    var checkboxes3 = document.querySelectorAll('input[name="' + checkboxName3 + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes3, function (el) {
      values.push(el.value);
    });

    this.cantidadBotellas = values


  }

  imprimir(){

    for (let i = 0; i < this.usuariosInvitados.length; i++) {

      console.log(this.usuariosInvitados[i])

    }

    for (let i = 0; i < this.bebidasSeleccionadas.length; i++) {

      console.log(this.bebidasSeleccionadas[i])

    }

  }

  /*obtenerLugar(id){

    var lugar = <HTMLFormElement>document.getElementById('botonLugar');
    lugar.value = id
    this.lugar = lugar.value

  }*/

  cambiarTexto(textoNuevo, id) {

    var lugar = <HTMLFormElement>document.getElementById('botonLugar');
    lugar.value = textoNuevo
    lugar.innerHTML = textoNuevo

    this.lugar = id

  }

  obtenerFecha() {

    var fecha = <HTMLFormElement>document.getElementById('fecha');
    this.fecha = fecha.value

  }

  crearFiesta(checkboxName, checkboxName2, checkboxName3) {

    this.obtenerFecha()
    this.listaInvitados(checkboxName)
    this.listaBebidas(checkboxName2)
    this.listaCantidad(checkboxName3)

    this.formatoHora()

    this.horaInicioF = this.ctrl.value.hour + ':' + this.ctrl.value.minute;
    this.horaFin = this.ctrl2.value.hour + ':' + this.ctrl2.value.minute;

    /*console.log('usuario', this.usuario.id)
    console.log('lugar', this.lugar)
    console.log('fecha', this.fecha)
    console.log('ini', this.horaInicioF)
    console.log('fin', this.horaFin)
    console.log('invitados', this.usuariosInvitados)
    console.log('botellas', this.bebidasSeleccionadas)
    console.log('cantidad', this.cantidadBotellas)*/

    this._servicio.crearFiesta(this.usuario.id, this.lugar, this.fecha, this.horaInicioF, this.horaFin)

    for (let i = 0; i < this.usuariosInvitados.length; i++) {

        this._servicio.enviarInvitacion(this.lugar, this.usuariosInvitados[i])

    }

    for (let i = 0; i < this.bebidasSeleccionadas.length; i++) {

      this._servicio.enviarPedido(this.cantidadBotellas[0], this.usuario.id, this.bebidasSeleccionadas[i])

    }

    this.resetForm()

    this._servicio.cambiarFiestasCreadas(this._servicio.retornarFiestasCreadas(this.usuario.id))

  }

  resetForm() {

    var resetForm = <HTMLFormElement>document.getElementById('formCrearFiesta');
    resetForm.reset();
  }

  formatoHora(){

    if(this.ctrl.value.hour < 9){

      this.ctrl.value.hour = '0' + this.ctrl.value.hour;

    }

    if(this.ctrl.value.minute < 9){

      this.ctrl.value.minute = '0' + this.ctrl.value.minute;

    }

    if(this.ctrl2.value.hour < 9){

      this.ctrl2.value.hour = '0' + this.ctrl2.value.hour;

    }

    if(this.ctrl2.value.minute < 9){

      this.ctrl2.value.minute = '0' + this.ctrl2.value.minute;

    }

    if(this.ctrl.value.hour > 20){

      this.ctrl.value.minute = this.ctrl.value.minute + ' pm';

    }else {

      if(this.ctrl.value.hour < 9){

        this.ctrl.value.minute = this.ctrl.value.minute + ' am';

      }

    }

    if(this.ctrl2.value.hour > 20){

      this.ctrl2.value.minute = this.ctrl2.value.minute + ' pm';

    }else{

      if(this.ctrl2.value.hour < 9){

        this.ctrl2.value.minute = this.ctrl2.value.minute + ' am';

      }

    }


  }

}
