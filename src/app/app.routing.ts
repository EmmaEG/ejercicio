import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { EditarComponent } from './components/editar/editar.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'articulos', component: ArticulosComponent},
    {path: 'articulos/:id', component: EditarComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);