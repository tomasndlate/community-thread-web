import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './button-link-primary/button-primary.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ButtonPrimaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonPrimaryComponent
  ]
})
export class AppUiComponentsModule { }
