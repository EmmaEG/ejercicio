import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { HomeComponent } from './components/home/home.component';
import { EditarComponent } from './components/editar/editar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, routing, ReactiveFormsModule ],
  providers:    [ appRoutingProviders ],
  declarations: [ AppComponent, HelloComponent, ArticulosComponent, HomeComponent, EditarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
