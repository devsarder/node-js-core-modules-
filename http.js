const http = require('http');

const port = 3000;
// create server instance
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello programmers!');
        res.end();
    } else if (req.url === '/about') {
        res.write('this is our about page!');
        res.end();
    } else {
        res.write('page not found!');
        res.end();
    }
});

server.listen(port);
console.log(`listening on ${port}`);
