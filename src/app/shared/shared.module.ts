

//Módulos
import { NgModule } from "@angular/core";
import { MzSidenavModule } from "ngx-materialize";
import { MzIconModule, MzIconMdiModule } from "ngx-materialize";

//Componentes
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NopagefoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NopagefoundComponent
  ],
  imports: [MzSidenavModule, MzIconModule, MzIconMdiModule]
})

//exportamos el archivo para  que pueda ser utilizado en otros módulos
export class SharedModule {}