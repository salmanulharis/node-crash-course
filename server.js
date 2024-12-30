import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    try {
        if (req.method === 'GET'){
            if(req.url === '/') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>Home Page</h1>');
            } else if(req.url === '/about'){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>About Page</h1>');
            }else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<h1>Not Found</h1>');
            }
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Server Error');

    }
})

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})