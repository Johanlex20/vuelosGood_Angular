import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario, UsuarioPage } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: []
})
export class UsuariosListaComponent implements OnInit {

  usuarioPage?:UsuarioPage;

  constructor(
    private usuarioService: UsuarioService
  ){}

  ngOnInit(): void {
    this.usuarioService.paginate()
      .subscribe(usuarioPage=>{
        this.usuarioPage = usuarioPage;
      });
  }

}
