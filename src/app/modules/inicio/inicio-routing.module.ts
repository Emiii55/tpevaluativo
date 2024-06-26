import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path:"",component:InicioComponent
  }, //para que al inicializar muestre este componente primero
  {
    path:"inicio",component:InicioComponent
  }//ruta para el componente inicio
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
