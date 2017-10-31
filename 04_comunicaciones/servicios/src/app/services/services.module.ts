import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosService } from './libros.service';
import { GoogleService } from './google.service';

@NgModule({
  imports: [
    CommonModule
  ],
 providers: [
   LibrosService,
   GoogleService
 ]
})
export class ServicesModule { }
