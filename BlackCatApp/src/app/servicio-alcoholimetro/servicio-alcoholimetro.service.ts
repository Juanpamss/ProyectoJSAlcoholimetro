import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioAlcoholimetroService {

  respuestaServer = []

  constructor(private httpClient: HttpClient) { }

  crearUsuario(nombre: String, apellido: String, nickname: String, password: String){

    this.httpClient.post(`http://localhost:1337/usuario`, {

      nombre : nombre,
      apellido: apellido,
      nickname: nickname,
      password : password

    }).subscribe(
      res => {
        //console.log(res);
      }
    );


  }





}


