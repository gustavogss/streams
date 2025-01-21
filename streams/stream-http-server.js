import http from 'node:http'
import {Transform} from 'node:stream'

class InverseNumberStream extends Transform{
  _transform(chunck, encodind, callback){
    const transform = Number(chunck.toString()) * -1
    console.log(transform);
    
    callback(null, Buffer.from(String(transform)))
  }
}

const server = http.createServer(async (req, res)=>{

console.log(fullStreamContent);
return res.end(fullStreamContent)

// return req.pipe(new InverseNumberStream()).pipe(res)
})
server.listen(3334)