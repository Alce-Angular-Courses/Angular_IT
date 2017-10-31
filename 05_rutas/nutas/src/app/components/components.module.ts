import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AutoresComponent } from './autores/autores.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InicioComponent, CatalogoComponent, AutoresComponent, EnlacesComponent, AboutComponent],
  exports: [InicioComponent, CatalogoComponent, AutoresComponent, EnlacesComponent, AboutComponent]
})
export class ComponentsModule { }
