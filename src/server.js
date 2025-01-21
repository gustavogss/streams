import http from 'node:http'
import { json } from './middlewares/json.js'
import { DB } from './db.js'

const db = new DB()


const server = http.createServer(async (req, res)=>{
  const{method, url} = req

  await json(req, res)
   
  if(method==='GET' && url ==='/users'){   
    const users = db.select('users')

    return res.end(JSON.stringify(users))
  }
  if (method==='POST' && url==='/users') {
    const {name, email} = req.body

    const user = {
      id: 1,
      name,
      email,
    }
    db.insert('users', user)

    return res.writeHead(201).end('Usuário Criado')
  }
  return res.writeHead(404).end('Error: Not Found!');
})
server.listen(3333)

