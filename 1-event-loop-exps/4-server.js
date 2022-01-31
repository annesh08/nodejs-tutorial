const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request event')
    res.end('hello World')
})

server.listen(5000, ()=> {
    console.log('Server listening on port 5000..')
})


//Output
// Server listening on port 5000..
// request event
// request event
// request event
// request event
// request event
// request event
// Ctrl+C