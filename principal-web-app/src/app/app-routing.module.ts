import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Shared/Pages/layout/layout.component';
import { MainPageComponent } from './Shared/Pages/main-page/main-page.component';
import { MainPageGuidelinesComponent } from './Guideline/Pages/main-page-guidelines/main-page-guidelines.component';
import { GuidelinePageComponent } from './Guideline/Pages/guideline-page/guideline-page.component';
import { InterfacesPagesComponent } from './Interfaces/Pages/interfaces-pages/interfaces-pages.component';	
const routes: Routes = [ {
  path: '',
  component: MainPageComponent,
  children: [
    { path: '', redirectTo: 'main', pathMatch: 'full' }, // Redirigir a la ruta del dashboard
    { path: 'main', component: MainPageComponent },
  ]
},
{ path: 'main-guidelines', component: MainPageGuidelinesComponent },
{ path: 'guidelines/:component', component: GuidelinePageComponent },
{ path: 'main-interfaces', component: InterfacesPagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
