const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
    if(req.url === '/hello'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            id: 1,
            text: 'Hello World!!'
        }));
    }
    else{
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
});