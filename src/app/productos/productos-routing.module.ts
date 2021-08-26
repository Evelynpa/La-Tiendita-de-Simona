import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './pages/lista-productos/lista.productos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ImgMenuComponent } from '../component/img-menu/img-menu.component';


const routes: Routes = [
  {
    path: '',
    
    children: [
      /* { path: 'aves', component: AvesComponent },
      { path: 'gatos', component: GatosComponent },
      { path: 'peces', component: PecesComponent },
      { path: 'perros', component: PerrosComponent },
      { path: 'roedores', component: RoedoresComponent },

      { path: 'perros/alimentos', component: PerrosComponent},
      { path: 'perros/higiene-salud', component: PerrosComponent },
      { path: 'perros/accesorios', component: PerrosComponent },
      { path: 'perros/ropa', component: PerrosComponent },
      { path: 'perros/cama', component: PerrosComponent } */

      { path: 'aves', component: ListaProductosComponent },
      { path: 'gatos', component: ListaProductosComponent },
      { path: 'peces', component: ListaProductosComponent },
      { path: 'perros', component: ListaProductosComponent },
      { path: 'roedores', component: ListaProductosComponent },

      /* PERROS */
      { path: 'perros/alimentos', component: ListaProductosComponent},
      { path: 'perros/higiene-salud', component: ListaProductosComponent },
      { path: 'perros/accesorios', component: ListaProductosComponent },
      { path: 'perros/ropa', component: ListaProductosComponent },
      { path: 'perros/cama', component: ListaProductosComponent },

      /* GATOS */
      { path: 'gatos/alimentos', component: ListaProductosComponent},
      { path: 'gatos/higiene-salud', component: ListaProductosComponent },
      { path: 'gatos/accesorios', component: ListaProductosComponent },
      { path: 'gatos/ropa', component: ListaProductosComponent },
      { path: 'gatos/cama', component: ListaProductosComponent },

      /* AVES */
      { path: 'aves/alimentos', component: ListaProductosComponent},
      { path: 'aves/accesorios', component: ListaProductosComponent },

      /* PECES */
      { path: 'peces/alimentos', component: ListaProductosComponent},
      { path: 'peces/accesorios', component: ListaProductosComponent },

      /* ROEDORES */
      { path: 'roedores/alimentos', component: ListaProductosComponent},
      { path: 'roedores/higiene-salud', component: ListaProductosComponent },
      { path: 'roedores/accesorios', component: ListaProductosComponent },
      { path: 'roedores/cama', component: ListaProductosComponent },
     
    ],
    
  },
  /* PRODUCTOS POR DETALLE */
  { path: 'perros/detalle/:id/:nombre', component: DetalleComponent , pathMatch: 'full'},
  { path: 'detalle/:id/:nombre', component: DetalleComponent , pathMatch: 'full'},

  /* TODOS LOS PRODUCTOS POR CATEGORIA */
  { path: 'alimentos/:categoria', component: ListaProductosComponent , pathMatch: 'full'},
  { path: 'accesorios-entretencion/:categoria', component: ListaProductosComponent , pathMatch: 'full'},
  { path: 'ropa-cama/:categoria', component: ListaProductosComponent , pathMatch: 'full'},
  { path: 'paseo-transporte/:categoria', component: ListaProductosComponent , pathMatch: 'full'}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProductosRoutingModule { }
