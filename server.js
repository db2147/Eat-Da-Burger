var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// create our server
var port = 8080;
var app = express();
app.use(express.static(process.cwd() + "public"));

app.use(bodyParser.urlencoded({
    extended: true
}))

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set Method Override
app.use(methodOverride('_method'))
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js")

app.use("/", routes);
app.use('/update', routes);
app.use('/create', routes);
app.listen(port);

 

// app.get('/',function(req,res){
//     connection.query('SELECT * FROM burgers;',function(err,data){
//         res.render('index',{movies:data});
//     })
// })

// app.post('/create', function(req,res){
//     connection.query('INSERT INTO burgers (burger) VALUES (?);s', [req.body.burger], function(err,result){
//         if(err)throw err;
//         res.redirect('/');   // redirects to the main page when the query goes off
//     })
// })

// app.put('/update',function(req,res){
//     connection.query('UPDATE burgers SET burger = ? WHERE id = ?;', [req.body.
//     burger, req.body.id], function(err,results){
//         if(err)throw err;
//         res.redirect('/');
//     })
// })