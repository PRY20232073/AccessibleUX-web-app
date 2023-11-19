import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageGuidelinesComponent } from './Pages/main-page-guidelines/main-page-guidelines.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../Shared/shared.module';
import { GuidelinePageComponent } from './Pages/guideline-page/guideline-page.component';


@NgModule({
  declarations: [
    MainPageGuidelinesComponent,
    GuidelinePageComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class GuidelineModule { }
