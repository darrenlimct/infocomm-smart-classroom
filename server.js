var http    = require('http');
var express = require('express');
var app     = express();

app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render('index');
})

app.use(function(req, res, next){
  res.status(404).render('404');
})

var server = app.listen(2345, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
});
