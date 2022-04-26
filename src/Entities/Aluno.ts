import { Pessoa } from './Pessoa'

export class Aluno extends Pessoa {
  constructor (nome: string, dataNasc: Date, matricula: number) {
    super(nome, dataNasc)
    this._dados.matricula = matricula
  }
}