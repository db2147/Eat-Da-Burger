var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// create our server
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// create connection to port
var port = 3000;
app.listen(port);

 

app.get('/',function(req,res){
    connection.query('SELECT * FROM burgers;',function(err,data){
        res.render('index',{movies:data});
    })
})

app.post('/create', function(req,res){
    connection.query('INSERT INTO burgers (burger) VALUES (?);s', [req.body.burger], function(err,result){
        if(err)throw err;
        res.redirect('/');   // redirects to the main page when the query goes off
    })
})

app.put('/update',function(req,res){
    connection.query('UPDATE burgers SET burger = ? WHERE id = ?;', [req.body.
    burger, req.body.id], function(err,results){
        if(err)throw err;
        res.redirect('/');
    })
})