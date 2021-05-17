import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlfabetoComponent } from './pages/alfabeto/alfabeto.component';
import { OpcionesComponent } from './pages/opciones/opciones.component';

const routes: Routes = [
  {path: 'inicio', component: OpcionesComponent},
  {path: 'cifrado', component: AlfabetoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
