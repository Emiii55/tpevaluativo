import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { EsquiComponent } from './pages/esqui/esqui.component';
import { SnowboardComponent } from './pages/snowboard/snowboard.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';

const routes: Routes = [
  {
    path:"prod",component:ProductoComponent
  },
  {
    path:"esq",component:EsquiComponent
  },
  {
    path:"snow",component:SnowboardComponent
  },
  {
    path:"ind",component:IndumentariaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
