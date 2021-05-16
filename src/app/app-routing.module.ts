import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CifradoComponent } from './pages/cifrado/cifrado.component';

const routes: Routes = [
  {path: 'cifrado', component: CifradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
