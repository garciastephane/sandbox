var http = require('http');
var myFirstServer = http.createServer(function(req, res){
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.write("Que chimba esta vaina depuis node.js");
  res.end();
});
myFirstServer.listen(3001);
