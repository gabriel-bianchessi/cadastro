import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa {
  constructor(nome: string, dataNasc: Date, siape: number) {
    super(nome, dataNasc)
    this._dados.siape = siape 
  }
}