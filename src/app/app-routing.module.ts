import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

//rutas generales
const routes: Routes = [
{
  path:"",component:InicioComponent
  //Lo dejamos vacio para que cuando entre a la pagina, se inicie en el Inicio. Llamamos al componente inicio
},
{
  path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  //Realizamos la ruta con carga perezosa, renderizamos todo el modulo.
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
