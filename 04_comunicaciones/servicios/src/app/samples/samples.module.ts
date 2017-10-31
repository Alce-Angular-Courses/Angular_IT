import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { GoogleComponent } from './google/google.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PadreComponent,
    GoogleComponent],
  exports: [
    PadreComponent,
    GoogleComponent]
})
export class SamplesModule { }
