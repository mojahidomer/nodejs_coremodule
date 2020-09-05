const http = require('http');

const server  = http.createServer((req,res)=>{
	console.log(req.headers);
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	res.end('Hello world')
})


server.listen(90,'localhost',()=>console.log('server running at port 90'))