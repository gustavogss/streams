import {Readable, Transform, Writable} from 'node:stream'

class OneToHubdredStream extends Readable{
  index =1
  _read(){
    const i = this.index++

    setTimeout(()=>{
      if (i > 100){
        this.push(null)
      } else{
        const buf = Buffer.from(String(i))
        this.push(buf)
      }
    }, 1000)
   
  }
}

class MultiplyByTenSystem extends Writable {
  _write(chunk, encodind, callback){
    console.log(Number(chunk.toString()*10));
    callback()
    
  }
}

class InverseNumberStream extends Transform{
  _transform(chunck, encodind, callback){
    const transform = Number(chunck.toString()) * -1
    callback(null, Buffer.from(String(transform)))
  }
}

new OneToHubdredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenSystem())