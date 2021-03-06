import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {RUTAS_APP} from "./app.routes";
import {RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule }    from '@angular/forms';

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
import { AdminFiestaComponent } from './admin-fiesta/admin-fiesta.component';
import { NuevaFiestaComponent } from './nueva-fiesta/nueva-fiesta.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';
import { ChartComponent } from './chart/chart.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchPipe } from './pipes/search.pipe';
import { UserInfoComponent } from './user-info/user-info.component';
import { EditarInfoUsuarioComponent } from './editar-info-usuario/editar-info-usuario.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    BarraNavegacionComponent,
    NotificacionComponent,
    PortalComponent,
    NavegadorSecundarioComponent,
    AdminFiestaComponent,
    NuevaFiestaComponent,
    TestComponent,

    ChartComponent,
    SearchPipe,
    UserInfoComponent,
    EditarInfoUsuarioComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    ChartModule,
    BrowserModule,
    RouterModule.forChild(RUTAS_APP),
    NgbModule.forRoot(),
    RouterModule.forRoot(

      RUTAS_APP, {useHash: false}

    ),
    FormsModule,
    AccordionModule,
    ReactiveFormsModule
  ],
  providers: [ServicioAlcoholimetroService,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
