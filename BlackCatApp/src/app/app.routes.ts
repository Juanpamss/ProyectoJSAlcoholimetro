import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./guards/auth.guard";
import {PortalComponent} from "./portal/portal.component";
import {AdminFiestaComponent} from "./admin-fiesta/admin-fiesta.component";
import {NuevaFiestaComponent} from "./nueva-fiesta/nueva-fiesta.component";
import {TestComponent} from "./test/test.component";
import {UserInfoComponent} from "./user-info/user-info.component";
import {EditarInfoUsuarioComponent} from "./editar-info-usuario/editar-info-usuario.component";


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
    component: AdminFiestaComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'nuevaFiesta',
    component: NuevaFiestaComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'test',
    component: TestComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'infoUsuario',
    component: UserInfoComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'editarUsuario',
    component: EditarInfoUsuarioComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'portal'
  }
];
