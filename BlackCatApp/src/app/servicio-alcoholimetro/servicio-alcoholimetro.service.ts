import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioAlcoholimetroService {

  constructor(private httpClient: HttpClient) { }

  usuarioExistente : any []

  consultarUsuario(nickname: string, password: string){

    this.httpClient.get(`http://localhost:1337/usuario?nickname=${nickname}&password=${password}`)
      .subscribe(
        (data:any[]) => {
          this.usuarioExistente = data
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




}


