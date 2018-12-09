var http = require('http')

var server = http.createServer(function(req, res) {
    console.log('>> Request incoming...')
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from Plain Text Response');
    console.log('<< Responded.')
})

server.listen(3000, '127.0.0.1');
console.log('Start listening on port 3000');