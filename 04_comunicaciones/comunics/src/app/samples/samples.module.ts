import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PadreComponent,
    HijoComponent],
  exports: [
    PadreComponent,
    HijoComponent]
})
export class SamplesModule { }
