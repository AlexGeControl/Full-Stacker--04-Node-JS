const express = require('express');
const morgan = require('morgan');
const http = require('http');

const hostIp = '0.0.0.0';
const port = 3000;

/*
    request handling logic:
 */
const app = express();

// specify request logging:
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// general pre-condition on routes:
app.use(
    (req, res, next) => {
        console.log(`[HTTP Express Server]: middleware activated -- at ${new Date().toISOString()} for ${req.url}`);
        next();
    }
);

// request handler:
app.get(
    '/contact.html',
    (req, res) => {
        console.log(`[HTTP Express Server]: GET / handler`);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html><head><title>Contact Us</title></head><body><h1>Contact Us</h1><p>+86-135-0168-0050</p></body></html>`
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