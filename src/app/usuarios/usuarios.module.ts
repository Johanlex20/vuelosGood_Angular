import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';


@NgModule({
  declarations: [
    UsuariosListaComponent,
    UsuariosFormComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
