import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CabezaComponent,
    PieComponent,
    LogoComponent,
    MenuComponent
  ],
  exports: [
    CabezaComponent,
    PieComponent,
    MenuComponent
  ]

})
export class SharedModule { }
