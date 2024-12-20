import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

// ACCEDEMOS A TODAS LAS RUTAS DEL PROYECTO
import { AppRoutingModule } from '../app-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

//importamos los componentes que utilizaremos en el navbar y en el footer




@NgModule({
  declarations: [
    //declaramos navbar y footer.
    NavbarComponent,
    FooterComponent
  ],
  //importamos y exportamos nuestros componentes dentro del ngmodule
  imports: [
    CommonModule,
    AppRoutingModule,
    //importamos el approuting en shared para que el navegador acceda a todas las rutas del sitio web
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    //luego de declarlo, lo exporto para que otros componentes puedan acceder a ellos
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule
  ]
})
export class SharedModule { }
