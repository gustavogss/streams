export class DB {
  #db = { }

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
      return data;
  }
}