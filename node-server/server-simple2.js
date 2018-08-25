var http = require('http')
var fs = require('fs')
http.createServer(function(req, res){
	switch (req.url){
		case '/content':
		  res.end( fs.readFileSync(__dirname + '/sample/test.html'))
		  break;
		case '/usage':
		  res.end( fs.readFileSync(__dirname + '/README.txt'))
		  break;
		default:
          res.end( fs.readFileSync(__dirname + '/sample/test.html'))
	}
}).listen(8000)