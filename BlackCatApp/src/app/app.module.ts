import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {RUTAS_APP} from "./app.routes";
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./guards/auth.guard";
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import {ServicioAlcoholimetroService} from "./servicio-alcoholimetro/servicio-alcoholimetro.service";
<<<<<<< HEAD
import {AuthService} from "./servicios/auth.service";
import { NotificacionComponent } from './notificacion/notificacion.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
=======

import {AuthService} from "./servicios/auth.service";

import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { PortalComponent } from './portal/portal.component';
>>>>>>> 76453d8ee29b15e6ea084e0645723d9b51a14448


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    BarraNavegacionComponent,
<<<<<<< HEAD
    NotificacionComponent
=======
    PortalComponent
>>>>>>> 76453d8ee29b15e6ea084e0645723d9b51a14448
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(

      RUTAS_APP, {useHash: true}

    ),
    FormsModule
  ],
  providers: [ServicioAlcoholimetroService,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
