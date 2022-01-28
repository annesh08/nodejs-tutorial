const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to Home Page');
    }
    if(req.url === '/about'){
        res.end('Here is our short history');
    }
    res.end(`
    <h1>Oopsie!</h1>
    <p>Welcome Anyway</p>
    <a href="/">Back Home</a>`);
})

server.listen(5000);