import {Component, OnInit} from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-admin-fiesta',
  templateUrl: './admin-fiesta.component.html',
  styleUrls: ['./admin-fiesta.component.css']
})
export class AdminFiestaComponent implements OnInit {

  fiestasCreadas: any = []

  usuario: any = []

  fecha: string

  constructor(private _servicio: ServicioAlcoholimetroService) {
  }

  ngOnInit() {

    this._servicio.usuarioLogeado.subscribe(mensaje => this.usuario = mensaje)

    this._servicio.buscarFiestaCreada.subscribe(mensaje => this.fiestasCreadas = mensaje)

    this.consultarFiestasCreadas()

  }

  consultarFiestasCreadas() {

    this.fiestasCreadas = this._servicio.retornarFiestasCreadas(this.usuario.id)

    //console.log('ADMIN FIESTA:', this.fiestasCreadas)

  }

  buscarFecha(fechaBuscar) {

    var fecha = <HTMLFormElement>document.getElementById(fechaBuscar);

    this.fecha = fecha.value

    //this._servicio.buscarPorFecha(this.usuario.id, this.fecha)

    this._servicio.retornarBuscarFecha(this.usuario.id, this.fecha)

    //this.mandarDatos()

  }

  mandarDatos() {

    console.log('mandar', this.fiestasCreadas)

    this._servicio.cambiarBuscarFiestaCreada(this.fiestasCreadas)

  }

}
