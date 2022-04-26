//@ts-ignore
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { Pessoa } from './Entities/Pessoa'
const rl = readline.createInterface({input, output})

async function main() {
  const nome = await rl.question("Qual o seu nome? ")
  const dataNasc = await rl.question("Qual sua data de nascimento? AAAA-DD-MM")

  const person = new Pessoa(nome, dataNasc)
  person.store()
  process.exit()
}

main()