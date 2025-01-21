import fs from 'node:fs/promises'

const dbPath = new URL('../db.json', import.meta.url)

export class DB {
  #db = { }

  constructor(){
    fs.readFile(dbPath, 'utf-8').then(data =>{
      this.#db = JSON.parse(data)
    }).catch(()=>{
      this.#persist()
    })
  }

  #persist() {
    fs.writeFile(dbPath, JSON.stringify(this.#db))
  }

  select(table){
    const data = this.#db[table] ?? []
    return data
  }

  insert(table, data){
      if (Array.isArray(this.#db[table])){
        this.#db[table].push(data)
      } else {
        this.#db[table] = [data]
      }
      this.#persist();
      return data;
  }
}