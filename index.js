const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) =>{
    
    if(req.url === '/') {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>HomePage</h1>','utf8');       
    }
    else if(req.url === '/about') {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>About</h1>','utf8');       
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('<h1>Not Found</h1>','utf8');       
    }    
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));