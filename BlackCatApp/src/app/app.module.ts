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

import { NotificacionComponent } from './notificacion/notificacion.component';

import {AuthService} from "./servicios/auth.service";

import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { PortalComponent } from './portal/portal.component';
import { NavegadorSecundarioComponent } from './navegador-secundario/navegador-secundario.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    BarraNavegacionComponent,
    NotificacionComponent,
    PortalComponent,
    NavegadorSecundarioComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(

      RUTAS_APP, {useHash: false}

    ),
    FormsModule
  ],
  providers: [ServicioAlcoholimetroService,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
