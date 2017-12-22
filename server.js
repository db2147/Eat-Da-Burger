var express = require("express");
var methodoverride = require("method-override");
var bodyparser = require("body-parser");

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

// create mysql connection
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'burgers_db'
});

connection.connect(function(err){
    if(err)throw err;
    console.log('Connected as id: '+connection.threadId);
})

app.get('/',function(req,res){
    connection.query('SELECT * FROM burgers;',function(err,data){
        res.render('index',{movies:data});
    })
})

app.post('/create', function(req,res){
    connection.query('INSERT INTO burgers (burger) VALUES (?);s', [req.body.movie], function(err,result){
        if(err)throw err;
        res.redirect('/');   // redirects to the main page when the query goes off
    })
})

app.put('/update',function(req,res){
    connection.query('UPDATE burgers SET burger = ? WHERE id = ?;', [req.body.
    movie, req.body.id], function(err,results){
        if(err)throw err;
        res.redirect('/');
    })
})