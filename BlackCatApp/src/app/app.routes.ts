import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./guards/auth.guard";
import {PortalComponent} from "./portal/portal.component";
import {AdminFiestaComponent} from "./admin-fiesta/admin-fiesta.component";
import {NuevaFiestaComponent} from "./nueva-fiesta/nueva-fiesta.component";


export const RUTAS_APP: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'registro',
    component: RegistroComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
    //canActivate: [AuthGuard]
  },

  {
    path: 'portal',
    component: PortalComponent
  },
  {
    path: 'adminFiesta',
    component: AdminFiestaComponent
  },
  {
    path: 'nuevaFiesta',
    component: NuevaFiestaComponent
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'portal'
  }
];
