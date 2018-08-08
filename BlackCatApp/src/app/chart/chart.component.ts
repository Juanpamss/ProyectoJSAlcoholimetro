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

  }

  ngOnInit() {

    this.data = {
      labels: ['Resultados'],
      datasets: []
    }

    this._servicio.testsRealizados.subscribe(mensaje => this.testsUsuario = mensaje)

    this._servicio.valorArduino.subscribe(mensaje => this.valoresArduino = mensaje)

    this.usuario = JSON.parse(localStorage.getItem('currentUser'));

    this.testsUsuario = this._servicio.retornarTests(this.usuario.id)

    this.valoresArduino = this._servicio.retornarValoresArduino()

    this.llenarChart()


  }

  llenarChart(){

    this.data.datasets = []

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

    this.nuevaInfo()

    console.log('nuevo: ', this.valoresArduino)

    this._servicio.guardarTest(this.valoresArduino[this.valoresArduino.length-1].valorMedido, this.fecha, this.usuario.id)


    /*for(let i = 0; i < this.testsUsuario.length; i++){

      this.data.datasets.push(
        {
          label: 'Test ' + (this.testsUsuario.length + 1),
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [this.testsUsuario[i].gradoAlcohol]
        }
      )

    }*/

    this._servicio.cambiarTests(this._servicio.retornarTests(this.usuario.id))

    alert('Acerquese al sensor y sople, los resultados se presentaran luego de unos segundos');

  }

  nuevaInfo(){

    this.valoresArduino = this._servicio.retornarValoresArduino()

  }

  obtenerFecha() {

    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

    this.fecha = utc

  }

  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
  }

}
