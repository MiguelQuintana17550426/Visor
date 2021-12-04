var http = require('http'),
	fs = require('fs');
http.createServer(function(req,res){
	fs.readFile("./index.html",function(err,html){
		res.writeHead(200,{"Content-Type":"text/json"})
		res.write(JSON.stringify({nombre:"miguel",eddad:22}));
		res.end();
	});
}).listen(4000);
