const http = require('http');

const hostname = 'dollar-notify-9cy6f0tr9-manutromero.vercel.app';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');

  setInterval(()=>{
    console.log("hola mundito nuevo")
  }, 1000)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});