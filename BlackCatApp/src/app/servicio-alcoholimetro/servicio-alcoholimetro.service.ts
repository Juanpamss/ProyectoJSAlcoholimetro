import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioAlcoholimetroService {

  private usuarioExistente : any []
  private fiesta : any []
  private estado;
  private invitaciones : any[]

  constructor(private httpClient: HttpClient) {
    this.usuarioExistente=[];
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

  consultarInvitaciones(): any[]{

    this.httpClient.get('http://localhost:1337/invitacion?usuarioIdFK=1')
      .subscribe(
        (data:any[]) => {

          this.invitaciones = data

        }
      )

      return this.invitaciones
  }

  consultarFiesta(): any[]{

    this.httpClient.get('http://localhost:1337/fiesta/1')
      .subscribe(
        (data:any[]) => {

           this.fiesta = data

        }
      )

    return this.fiesta

  }




}


