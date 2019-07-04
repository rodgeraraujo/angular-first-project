import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  usuariosUrl = 'https://api.github.com/users';

  contatos = [
    {id: 1, nome: 'Rogério', email: 'rogeiro@email.com'},
    {id: 2, nome: 'Fernanda', email: 'fernanda@email.com'},
    {id: 3, nome: 'Fabio', email: 'fabio@email.com'}
  ];

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.usuariosUrl}`);
    // return this.contatos;
  }
}
