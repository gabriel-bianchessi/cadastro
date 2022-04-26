//@ts-ignore
import * as readline from 'node:readline/promises'
import * as fs from 'node:fs'
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({input, output})

type GenericObject = {[key: string]: any}
class Entity {
  private _dados: GenericObject = {}

  constructor() {}

  load() {}
  
  store() {
    // TODO mudar para assíncrono
    fs.writeFileSync("teste.txt", "Olá bicho")
  }

  delete() {}
}

const entity = new Entity()
entity.store()