import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';

@NgModule({
  declarations: [AppComponent, AcumuladorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
