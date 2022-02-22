var http = require('http');
var fs = require('fs');
fs.writeFileSync('index.html',"<h1>hello world</h1>");
const data = fs.readFileSync('index.html');

const server = http.createServer((req,res)=>{
    res.end(data)
});

server.listen(3000,()=> console.log("server is responding"))