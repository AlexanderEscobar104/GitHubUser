import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitlistComponent } from './pages/gitlist/gitlist.component';

const routes: Routes = [
  {path: 'listarusuario', component: GitlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
