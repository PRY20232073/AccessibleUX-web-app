import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Shared/Pages/layout/layout.component';
import { MainPageComponent } from './Shared/Pages/main-page/main-page.component';
const routes: Routes = [ {
  path: '',
  component: MainPageComponent,
  children: [
    { path: '', redirectTo: 'main', pathMatch: 'full' }, // Redirigir a la ruta del dashboard
    { path: 'main', component: MainPageComponent },
    { path: 'interfaces', component: MainPageComponent },
  ]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
