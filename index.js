const http = require('http');
const axios = require('axios');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');

  const helloWord = async ()=>{
    await axios.get('https://api.telegram.org/bot5509477086:AAElj-pA5Zg9KGT9AcrV--uPwK-OxF6peUg/sendMessage?chat_id=-802012750&text=Cada 10 minutos se envia este mensaje').then(resp => {

        console.log(resp.data);

      
    });
}

    helloWord()

    setInterval(()=>{
       helloWord()
      },600000)

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});