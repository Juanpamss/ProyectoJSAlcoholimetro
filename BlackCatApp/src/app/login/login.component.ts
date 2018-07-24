import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: string
  password: string

  constructor() { }

  ngOnInit() {
  }

  datosRegistro(event, formData){
    console.log(event);
    console.log(formData.value);
    this.correo=formData.value.correo.toString();
    this.password=formData.value.password.toString();

  }


}
