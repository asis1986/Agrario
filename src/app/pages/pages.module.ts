
// importamos los archivos necesarios para la creacón de un módulo independiente
import { NgModule } from "@angular/core";

//importarmos los componentes necesarios para crear un módulo independiente
import { PagesComponent } from './pages.component';
import { GraficsComponent } from './grafics/grafics.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

//Importamos el sistema de rutas hijas
import { PAGES_ROUTES } from "./pages.routes";


@NgModule({

  declarations:[
    PagesComponent,
    GraficsComponent,
    HomeComponent
  ],
  exports:[
    PagesComponent,
    GraficsComponent,
    HomeComponent
  ],

  imports:[SharedModule, PAGES_ROUTES]

})

//exportamos el módulo para que sea utilizado en diferentes archivos donde este sea requerido
export class PagesModule{}