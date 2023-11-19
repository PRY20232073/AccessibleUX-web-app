import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Components/footer/footer.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { AppModule } from '../app.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    FooterComponent,
    LayoutComponent,
    MenuComponent,
    SidebarComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    FooterComponent,
    LayoutComponent,
    MenuComponent,
    SidebarComponent,
    MainPageComponent
  ]
})
export class SharedModule { }
