import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './button-link-primary/button-primary.component';
import { Router, RouterModule } from '@angular/router';
import { InputPrimaryComponent } from './input-primary/input-primary.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    InputPrimaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ButtonPrimaryComponent,
    InputPrimaryComponent
  ]
})
export class AppUiComponentsModule { }
