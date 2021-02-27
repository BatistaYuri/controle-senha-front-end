import { Component, Input, OnInit } from '@angular/core';
import { Senha } from 'src/app/models/senha';
import { TipoSenha } from 'src/app/models/tipo-senha';
import { SenhaService } from 'src/app/services/senha.service';

@Component({
  selector: 'app-painel-component',
  templateUrl: './painel-component.component.html',
  styleUrls: ['./painel-component.component.css']
})
export class PainelComponentComponent implements OnInit {

  @Input() usuario: any
  senhas: any
  senhaAtual

  constructor(private service: SenhaService) { }

  ngOnInit(): void {
    setInterval(async () => {
      this.getSenhas()
    }, 500)
  }

  getSenhaAtual() {
    this.service.getSenhaAtual().subscribe(senha => {
      this.senhaAtual = senha
    })
  }

  getSenhas() {
    this.getSenhaAtual()
    this.service.get().subscribe(senhas => {
      this.senhas = senhas
    })
  }

  gerarSenha(idTipo: number) {
    let senha = new Senha
    let tipo = new TipoSenha
    tipo.id = idTipo
    senha.tipoSenha = tipo
    this.service.save(senha).subscribe(() => {
      this.getSenhas()
    })
  }

  chamarSenha() {
    if (this.senhas.length > 0) {
      this.service.chamar(this.senhaAtual, this.senhas[0].id).subscribe(() => {
        this.getSenhas()
      })
    }

  }

  reset() {
    this.service.deleteAll().subscribe(() => {
      this.getSenhas()
    })
  }

}
