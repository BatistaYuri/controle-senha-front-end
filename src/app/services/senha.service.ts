import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Senha } from '../models/senha';

@Injectable({
  providedIn: 'root'
})
export class SenhaService {

  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(environment.backendUrl + '/api/senhas')
  }

  getSenhaAtual(){
    return this.httpClient.get(environment.backendUrl + '/api/senhaAtual')
  }

  save(senha : Senha){
    return this.httpClient.post(environment.backendUrl + '/api/senha', senha)
  }

  chamar(senhaAtual: Senha, idProx : number){
    return this.httpClient.post(environment.backendUrl + `/api/chamar/${idProx}`, (senhaAtual) ? (senhaAtual) : (null))
  }

  deleteAll(){
    return this.httpClient.delete(environment.backendUrl + `/api/deletar`)
  }

}
