import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioPage } from 'src/app/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http:HttpClient
  ) {}

paginate(size: number = 5, page: number = 0){
    let params = new HttpParams();
    params = params.append('size', size);
    params = params.append('page', page);
    params = params.append('sort', 'usuCreatedAt,desc');
    return this.http.get<UsuarioPage>('http://localhost:8080/api/usuarios',{params});
  }



}


