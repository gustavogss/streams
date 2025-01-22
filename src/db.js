import fs from "node:fs/promises";

const dbPath = new URL("../db.json", import.meta.url);

export class DB {
  #db = {};

  constructor() {
    fs.readFile(dbPath, "utf-8")
      .then((data) => {
        this.#db = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(dbPath, JSON.stringify(this.#db));
  }

  select(table, search) {
    let data = this.#db[table] ?? [];
    if (search) {
      data = data.filter((row) => {
        return Object.entries(search).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase());
        });
      });
    }
    return data;
  }

  insert(table, data) {
    if (Array.isArray(this.#db[table])) {
      this.#db[table].push(data);
    } else {
      this.#db[table] = [data];
    }
    this.#persist();
    return data;
  }

  delete(table, id) {
    const rowIndex = this.#db[table].findIndex((row) => row.id === id);
    if (rowIndex > -1) {
      this.#db[table].splice(rowIndex, 1);
      this.#persist();
    }
  }

  update(table, id, data) {
    const rowIndex = this.#db[table].findIndex((row) => row.id === id);
    if (rowIndex > -1) {
      this.#db[table][rowIndex] = { id, ...data };
      this.#persist();
    }
  }
}
