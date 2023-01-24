const http = require("http");//there are total 65000 ports usally we use 2000-9000
const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.statusCode=400; 
        res.write('<h1>Welcome to GLA</h1>');
        res.write('<h1>Ritesh verma</h1>');
         //200-299 okay response others 500-599 server error response 
        res.end();
    } else if (req.url === '/contactus')
    {
        res.write('<h1>Contack us</h1>');
        res.end();
    }
    else {
        res.end("wrong page");
    }
});
server.listen(5900);
console.log("Server is running at post 5000")