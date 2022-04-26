import { Entity } from "./AbstractEntities"

export class Pessoa extends Entity {
  //TODO Criar classe aluno(Matrícula) e professor(SIAPE)
  constructor(nome: string, dataNasc: Date) {
    super()
    this._dados.nome = nome
    this._dados.dataNasc = dataNasc
  }
}
