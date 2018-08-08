import { Component, OnInit } from '@angular/core';
import {ServicioAlcoholimetroService} from "../servicio-alcoholimetro/servicio-alcoholimetro.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data: any;

  testsUsuario : any = []

  constructor(private _servicio : ServicioAlcoholimetroService) {

    this.data = {
      labels: ['Resultados'],
      datasets: []
    }

  }

  ngOnInit() {

    this.testsUsuario = this._servicio.retornarTests()



    for(let i=0; i < this.testsUsuario.length; i++){

          this.data.datasets.push(

            {
              label: 'Test ' + (i+1),
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [this.testsUsuario[i].gradoAlcohol]
            }

          )

    }



    console.log('TEST:', this.testsUsuario)

  }

}
