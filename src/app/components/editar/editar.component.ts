import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { ArticuloService } from '../../../services/articulo.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent implements OnInit {

  form: FormGroup;
  id: string;
  public artSubs: Subscription;

  constructor( 
    private formbuilder: FormBuilder,
    private articuloService: ArticuloService,
    private router: Router,
    private activatedRoute: ActivatedRoute 
  ) {
    this.buildForm();
   }

   ngOnDestroy(): void {
    this.artSubs.unsubscribe();
  }

  ngOnInit() { 
    this.artSubs = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.articuloService.getArticulo(this.id)
      .subscribe(articulo => {
        this.form.patchValue(articulo); 
      });
    });
  }

  saveArticulo(event: Event) {
    event.preventDefault(); 
    if (this.form.valid) {
      const articulo = this.form.value;
      this.articuloService.updateArticulo(this.id, articulo)
      .subscribe(() => {
        this.router.navigate(['./articulos']);
      });
    }
  }

 
  private buildForm() {
    this.form = this.formbuilder.group({
      nombre: ['', [Validators.required]],
    });
  }
}
