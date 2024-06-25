import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';



@NgModule({
  declarations: [
    RegistroComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutentificacionModule { }
