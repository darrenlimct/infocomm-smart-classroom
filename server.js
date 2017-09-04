var http    = require('http');
var express = require('express');
var app     = express();
var loggedIn = false;
var subject = 1;

app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.get("/login", function(req, res){
    if (loggedIn){
        res.redirect("/");
    }
    res.render('login');
})

app.post("/login", function(req, res){
    //verify
    loggedIn = true;
    console.log("erm");
    res.redirect("/");
})

app.get("/", function(req, res){
    if (!loggedIn){
        res.redirect("login");
    }
    res.render('index')
})

app.use(function(req, res, next){
  res.status(404).render('404');
})

var server = app.listen(2345, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
});
