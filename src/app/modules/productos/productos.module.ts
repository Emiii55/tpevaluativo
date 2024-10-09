import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { EsquiComponent } from './pages/esqui/esqui.component';
import { SnowboardComponent } from './pages/snowboard/snowboard.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { TextoComponent } from './components/texto/texto.component';


@NgModule({
  declarations: [
    ProductoComponent,
    CarruselComponent,
    EsquiComponent,
    SnowboardComponent,
    IndumentariaComponent,
    TextoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports: [
    ProductoComponent,
    CarruselComponent
  ]
})
export class ProductosModule { }
