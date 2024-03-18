// http server responding with 200 OK
const http = require('http');

const server = http.createServer((req, res) => {
  console.log("handling request");

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

server.listen(3000, '127.0.0.1');
