import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'routePath', component: Component },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes);