import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioAlcoholimetroService {

  constructor(private httpClient: HttpClient) {
    this.usuarioExistente=[];
  }

  private usuarioExistente : any []
  private estado;
  private logStatus=false;

  setLogguedIn(value: boolean){
    this.logStatus=value;
  }



  get isLogguedIn(){
    return this.logStatus;
  }

  get getUsuario(){
    return this.usuarioExistente
  }

  get getEstado(){
    return this.estado;
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
        console.log(res);
      }
    );


  }




}


