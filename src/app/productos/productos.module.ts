import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module'

import { PerrosComponent } from './pages/perros/perros.component';
import { GatosComponent } from './pages/gatos/gatos.component';
import { AvesComponent } from './pages/aves/aves.component';
import { PecesComponent } from './pages/peces/peces.component';
import { RoedoresComponent } from './pages/roedores/roedores.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [PerrosComponent, GatosComponent, AvesComponent, PecesComponent, RoedoresComponent, DetalleComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports:[PerrosComponent, GatosComponent, AvesComponent, PecesComponent, RoedoresComponent,
    DetalleComponent,
    RouterModule
  ]
})
export class ProductosModule { }
