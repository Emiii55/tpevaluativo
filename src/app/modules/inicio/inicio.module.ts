import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardComponent } from './components/card/card.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { CarruselComponent } from './components/carrusel/carrusel.component';
//inicio para las vistas, ruteo todos los componentes

@NgModule({
  declarations: [
    CardComponent,
    InicioComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule, //importo y exporto los componentes que uso en este modulo, en el componente card
    MatCardModule,
    MatTabsModule
  ],
  exports:[
    //exporto todos los componentes q vaya a usar
    CardComponent,
    InicioComponent,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    CarruselComponent
  ]
})
export class InicioModule { }
