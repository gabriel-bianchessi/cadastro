import * as fs from 'node:fs'

type TGenericObject = {[key: string]: any}
export abstract class Entity {
  protected _dados: TGenericObject = {}
  constructor() {}
  load() {}
  store() {
    const dadoString = JSON.stringify(this._dados)
    // TODO mudar para assíncrono
    fs.writeFileSync("entity.json", dadoString)
  }
  delete() {}
}