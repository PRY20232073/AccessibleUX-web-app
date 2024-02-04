import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfacesPagesComponent } from './Pages/interfaces-pages/interfaces-pages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../Shared/shared.module';
import { InterfacesMainPageComponent } from './Pages/interfaces-main-page/interfaces-main-page.component';
import { CrearCitaViewComponent } from './Components/crear-cita-view/crear-cita-view.component';
import { ConsultarCitaViewComponent } from './Components/consultar-cita-view/consultar-cita-view.component';
import { EspecialidadesViewComponent } from './Components/especialidades-view/especialidades-view.component';
import { EnContactoViewComponent } from './Components/en-contacto-view/en-contacto-view.component';
import { BuzonViewComponent } from './Components/buzon-view/buzon-view.component';
import { BuzonQuejasViewComponent } from './Components/buzon-quejas-view/buzon-quejas-view.component';
import { UbicacionesViewComponent } from './Components/ubicaciones-view/ubicaciones-view.component';



@NgModule({
  declarations: [
    InterfacesPagesComponent,
    InterfacesMainPageComponent,
    CrearCitaViewComponent,
    ConsultarCitaViewComponent,
    EspecialidadesViewComponent,
    EnContactoViewComponent,
    BuzonViewComponent,
    BuzonQuejasViewComponent,
    UbicacionesViewComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class InterfacesModule { }
