import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { environment } from '../environments/environment';
import { Articulo } from '../app/models/articulo.model';



@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(
    private http: HttpClient 
  ) { }

  getAllArticulos() { 
    return this.http.get<any>(`${environment.url_api}entrevista/articulos`);
  }

  getArticulo(id: string) {
    return this.http.get<Articulo>(`${environment.url_api}entrevista/articulos/${id}`);
  }

  updateArticulo(id: string, changes: Partial<Articulo>) { 
    return this.http.put(`${environment.url_api}entrevista/articulos/${id}`, changes);
  }

}
