// Elementos de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { FormsModule } from '@angular/forms';
// Modulos de la aplicación
import { SamplesModule } from './samples/samples.module';
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';
// Componentes
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SamplesModule,
    SharedModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
