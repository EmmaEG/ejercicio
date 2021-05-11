import { Component, OnInit } from '@angular/core';

import { Articulo } from '../../models/articulo.model';
import { ArticuloService } from '../../../services/articulo.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html'
})
export class ArticulosComponent implements OnInit {

  public articulos: Articulo[] = [];

  constructor(
    private articuloService: ArticuloService
  ) { }

  ngOnInit() {
     this.fetchArticulos();
  }

   fetchArticulos() {
    this.articuloService.getAllArticulos()
    .subscribe(articulos => {
      this.articulos = articulos;
    });
  }

}
