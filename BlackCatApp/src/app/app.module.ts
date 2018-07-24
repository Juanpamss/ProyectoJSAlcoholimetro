import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {RUTAS_APP} from "./app.routes";
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(

      RUTAS_APP, {useHash: true}

    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
