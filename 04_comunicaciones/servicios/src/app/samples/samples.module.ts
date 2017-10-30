import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PadreComponent],
  exports: [
    PadreComponent]
})
export class SamplesModule { }
