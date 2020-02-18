const express = require('express');
const http = require('http');

const hostIp = '0.0.0.0';
const port = 3000;

/*
    request handling logic:
 */
const app = express();

// general pre-condition on routes:
app.use(
    (req, res, next) => {
        console.log(`[HTTP Express Server]: middleware activated -- at ${new Date().toISOString()} for ${req.url}`);
        next();
    }
);

// request handler:
app.get(
    '/',
    (req, res) => {
        console.log(`[HTTP Express Server]: GET / handler`);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html><head><title>Home</title></head><body><h1>Greetings, NodeJS Developer!</h1></body></html>`
        );
        res.end();
    }
)

/*
    best practice for HTTP/HTTPS server setup
 */
const server = http.createServer(app);

server.listen(
    port, hostIp, 15,
    () => {
        console.log(`[HTTP Express Server]: ready to acess at http://${hostIp}:${port}`)
    }
)