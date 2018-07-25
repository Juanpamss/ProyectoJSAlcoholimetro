import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {}

  private logStatus=false;
  private usuarioExistente : any []
  private estado: boolean;

  setLogguedIn(value: boolean){
    this.logStatus=value;
  }

  get isLogguedIn(){
    return this.logStatus;
  }

  get getEstado(){
    return this.estado;
  }

  public consultarUsuario(correo: string, password: string){

    this._http.get('http://localhost:1337/usuario?correo='+correo+'&password='+password)
      .subscribe(
        (data:any[])=>{
          console.log(data)
          if(data.length==0){
            this.estado=false;

          }else{
            this.usuarioExistente = data[0];
            this.estado=true;

          }
          console.log(this.estado)
        },
        (err)=>{
          console.log(err);
        }
      )

  }
}
