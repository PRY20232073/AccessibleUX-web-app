import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { InterfacesModule } from './Interfaces/interfaces.module';
import { GuidelineModule } from './Guideline/guideline.module';
import {PrimeNgModule} from "./prime-ng/prime-ng.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    /*Other Modules*/
    SharedModule,
    InterfacesModule,
    GuidelineModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
