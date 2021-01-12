// console.log('node 执行')
const http = require('http')
http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/pain;charset=utf-8'})
    response.end('小蒋真美')
}).listen(5433)

console.log('nodejs运行在 http://localhost:5433/ 上')