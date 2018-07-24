import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioAlcoholimetroService {

  constructor(private httpClient: HttpClient) { }

  usuarioExistente : any []
   private logStatus=false;

  setLogguedIn(value: boolean){
    this.logStatus=value;
  }



  get isLogguedIn(){
    return this.logStatus;
  }

  consultarUsuario(correo: string, password: string){

    this.httpClient.get(`http://localhost:1337/usuario?correo=${correo}&password=${password}`)
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
        console.log(res);
      }
    );


  }




}


