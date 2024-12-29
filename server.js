import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello wrold</h1>');
})

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})