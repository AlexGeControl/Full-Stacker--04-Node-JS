const http = require('http');
const url = require('url');

const path = require('path');
const fs = require('fs');

// use this in docker to enable external acess:
const hostIp = '0.0.0.0';
const port = 3000;

// error handling:
const errorUrl = '/index.html';
const errorPath = path.resolve('./public' + errorUrl);

const handleError = (res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(errorPath).pipe(res);
}

const server = http.createServer(
    function (req, res) {
        // prompt:
        console.log(`[HTTP Server]: request ${req.url} by method ${req.method}`);

        // identify local file:
        var fileUrl = (req.url === '/') ? '/index.html' : req.url;
        var filePath = path.resolve('./public' + fileUrl);

        fs.exists(
            filePath,
            (exists) => {
                if (exists) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
                } else {
                    handleError(res);
                }
            }
        )
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