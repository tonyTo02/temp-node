const http = require('http');

const sever = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to my Home page');
    }
    if(req.url === '/about'){
        res.end("Here is the shortly page");
    }
    if(req.url === '/error'){
        res.end(`<h1>Opps!</h1>
            <p>We can't find your homepage!<p/>
            <a href='/'> Back home </a>
        `);
    }
})
// console.log('Sever is running on: localhost:5000');
sever.listen(5000);