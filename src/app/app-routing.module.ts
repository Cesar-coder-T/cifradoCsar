import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlfabetoComponent } from './pages/alfabeto/alfabeto.component';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { DecifradoComponent } from './pages/decifrado/decifrado.component';

const routes: Routes = [
  {path: '', component: OpcionesComponent},
  {path: 'cifrado', component: AlfabetoComponent},
  {path: 'decifrado', component: DecifradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
