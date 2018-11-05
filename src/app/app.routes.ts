



//módulos necesarios para crear el sistema de rutas
import { RouterModule, Routes } from '@angular/router';

//componentes necesarios para crear el sistema de rutas principal
import { SigninComponent } from './signin/signin.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { SignupComponent } from './signup/signup.component';


//sístemas de rutas principales

const appRoutes: Routes = [
 
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "**", component: NopagefoundComponent }
];

export const appRouting = RouterModule.forRoot(appRoutes, {useHash:true});