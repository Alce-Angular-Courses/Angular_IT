import { EnlacesComponent } from './components/enlaces/enlaces.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AutoresComponent } from './components/autores/autores.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'autores', component: AutoresComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'about', component: AboutComponent },
    { path: 'enlaces', component: EnlacesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const appRouting = RouterModule.forRoot(routes);