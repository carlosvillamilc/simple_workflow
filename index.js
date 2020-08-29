const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) =>{
    
    if(req.url === '/') {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>HomePage</h1>','utf8');       
    }    
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));