
// Modulos necesarios para cargar la aplcación
import { NgModule } from "@angular/core";
import { PagesModule } from "./pages/pages.module";
import { BrowserModule } from '@angular/platform-browser';


//Componentes del Módulo principal

import { AppComponent } from "./app.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

//sistema de rutas
import { appRouting } from './app.routes';



//import { FooterComponent } from './shared/footer/footer.component';
//import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
//import { SidebarComponent } from './shared/sidebar/sidebar.component';
//import { HeaderComponent } from './shared/header/header.component';
//import { PagesComponent } from './pages/pages.component';
//import { GraficsComponent } from './pages/grafics/grafics.component';
//import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
   
    //PagesComponent,
   // GraficsComponent,
   // HomeComponent,
    //FooterComponent,
    //NopagefoundComponent,
  
    //SidebarComponent
   
  ],
  imports: [
    BrowserModule,
    appRouting,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
