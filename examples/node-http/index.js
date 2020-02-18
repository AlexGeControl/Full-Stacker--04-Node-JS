const http = require('http');
const url = require('url');

const path = require('path');
const fs = require('fs');

// use this in docker to enable external acess:
const hostIp = '0.0.0.0';
const port = 3000;

const server = http.createServer(
    function (req, res) {
        // prompt:
        console.log(`[HTTP Server]: request ${req.url} by method ${req.method}`);

        // parse query:
        const q = url.parse(
            req.url, 
            // parse query string:
            true
        ).query;
        const { lastname, firstname} = q;

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html><head><title>Hello, NodeJS!</title></head><body><h1>Greetings, ${lastname} ${firstname}!</h1></body></html>`
        );
        res.end();
    }
);

server.listen(
    // host IP & port:
    port, hostIp, 
    // max backlog length:
    511,
    () => {
        console.log(`[HTTP Server]: ready to access http://${hostIp}:${port}`)
    }
);