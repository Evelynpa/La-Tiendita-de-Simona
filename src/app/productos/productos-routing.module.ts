import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvesComponent } from './pages/aves/aves.component';
import { GatosComponent } from './pages/gatos/gatos.component';
import { PecesComponent } from './pages/peces/peces.component';
import { PerrosComponent } from './pages/perros/perros.component';
import { RoedoresComponent } from './pages/roedores/roedores.component';

import { DetalleComponent } from './pages/detalle/detalle.component';


const routes: Routes = [
  {
    path: '',
    
    children: [
      { path: 'aves', component: AvesComponent },
      { path: 'gatos', component: GatosComponent },
      { path: 'peces', component: PecesComponent },
      { path: 'perros', component: PerrosComponent },
      { path: 'roedores', component: RoedoresComponent },

      { path: 'perros/alimentos', component: PerrosComponent},
      { path: 'perros/higiene-salud', component: PerrosComponent },
      { path: 'perros/accesorios', component: PerrosComponent },
      { path: 'perros/ropa', component: PerrosComponent },
      { path: 'perros/cama', component: PerrosComponent },

      
     /*  {
        path: 'detalle',
        loadChildren: () => import('./../detalle/detalle.module').then(m => m.DetalleModule)
      }, */

     
    ],
    
  },
  { path: 'perros/detalle/:id', component: DetalleComponent , pathMatch: 'full'}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProductosRoutingModule { }
