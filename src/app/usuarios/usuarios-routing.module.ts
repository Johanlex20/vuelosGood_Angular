import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';

const routes: Routes = [
  {
    path: 'usuarios-lista',
    component: UsuariosListaComponent
  },
  {
    path: 'usuarios-form',
    component: UsuariosListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
