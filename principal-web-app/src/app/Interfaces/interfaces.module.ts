import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfacesPagesComponent } from './Pages/interfaces-pages/interfaces-pages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../Shared/shared.module';



@NgModule({
  declarations: [
    InterfacesPagesComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class InterfacesModule { }
