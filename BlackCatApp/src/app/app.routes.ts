import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./guards/auth.guard";


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
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
