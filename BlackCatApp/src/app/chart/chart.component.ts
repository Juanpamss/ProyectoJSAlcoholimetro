import {Component, OnInit} from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data: any;

  testsUsuario: any = []

  valoresArduino: any = []

  usuario: any = []

  fecha: string

  constructor(private _servicio: ServicioAlcoholimetroService) {

    this.data = {
      labels: ['Resultados'],
      datasets: []
    }

  }

  ngOnInit() {

    this.usuario = JSON.parse(localStorage.getItem('currentUser'));

    this.testsUsuario = this._servicio.retornarTests()

    this.valoresArduino = this._servicio.retornarValoresArduino()

    for(let i = 0; i < this.testsUsuario.length; i++){

      this.data.datasets.push(
        {
          label: 'Test ' + (i+1),
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [this.testsUsuario[i].gradoAlcohol]
        }
      )

    }

  }

  nuevoTest(){

    this.obtenerFecha()

    this._servicio.guardarTest(this.valoresArduino[this.valoresArduino.length-1], this.fecha, this.usuario.id)

    this._servicio.obtenerTestsUsuario(this.usuario.id)

    this._servicio.obtenerValorArduino()

    this.testsUsuario = this._servicio.retornarTests()

    this.valoresArduino = this._servicio.retornarValoresArduino()

    for(let i = 0; i < this.testsUsuario.length; i++){

      this.data.datasets.push(
        {
          label: 'Test ' + (this.testsUsuario.length + 1),
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [this.testsUsuario[i].gradoAlcohol]
        }
      )

    }


  }

  obtenerFecha() {

    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

    this.fecha = utc

  }

}
