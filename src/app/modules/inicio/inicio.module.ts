import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardComponent } from './components/card/card.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
//inicio para las vistas, ruteo todos los componentes

@NgModule({
  declarations: [
    CardComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule, //importo y exporto los componentes que uso en este modulo, en el componente card
    MatCardModule
  ],
  exports:[
    //exporto todos los componentes q vaya a usar
    CardComponent,
    InicioComponent,
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
