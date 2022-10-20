import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsListComponent } from './buttons-list/buttons-list.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ButtonsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
