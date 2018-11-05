//Módulos 

import {RouterModule, Routes } from '@angular/router';

//Componentes
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { GraficsComponent } from './grafics/grafics.component';

//creamos el sistema de rutas que implementaremos para la mayoria de las páginas

// creamos el arreglo de rutas a utilizar
const PagesRoutes: Routes = [

  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "grafics", component: GraficsComponent },
      { path: "", redirectTo: "/home", pathMatch: "full" }
    ]
  }

];

//exportamos el sistema de rutas para que puedan ser utilizadas en otros módulos.
export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);