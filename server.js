var express = require('express');
var app = express(); 
app.use(express.static("./client"));
app.listen(9000,function(){
	console.log("server listening on 9000");
}); 