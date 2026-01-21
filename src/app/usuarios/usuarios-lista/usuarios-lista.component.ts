import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario, UsuarioPage } from 'src/app/interfaces/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: []
})
export class UsuariosListaComponent implements OnInit {

  usuarioPage?:UsuarioPage;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.usuarioService.paginate()
      .subscribe(usuarioPage=>{
        this.usuarioPage = usuarioPage;
      });
  }

}
