const http = require('http');
const port = 3000

const server = http.createServer((req, res) => {
    console.log('run request');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3> Hello world! </h3>');
    res.write('<h2>from ERIC & HOI DAN IT </h2>');
    res.end();
})
server.listen(port, 'localhost', () => {
    console.log('Node.js server is running in port: $port');
})