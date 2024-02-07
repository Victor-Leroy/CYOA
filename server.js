const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Assuming your HTML file is in the same directory as your server script
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading the file');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
