# Eat-Da-Burger
This is a really fun application where I've created a burger logger with MySql, Node, Express, and Handlebars.&nbsp; The application allows you to enter in new burgers which will be stored in our MySql database. &nbsp;There is a *Devour It* button if you're hungry and a *Cook It* button if you want seconds!<br><br> <img src="public/assets/img/directory.png" alt="Drawing" style="width: 250px; float: left;" /> 

The filepath for this project is quite involved as you can see here.&nbsp; The config directory is where we create our connection to our MySql database.&nbsp; The orm.js file is where we create the methods that will execute the necessary MySQL commands in the controllers.&nbsp; Inside the burger controller.js file we create the code that will call the ORM functions using burger specific input for the ORM.&nbsp; This is exported at the end of the file with a module.exports.&nbsp; Our db directory houses the code for MySql.&nbsp; We have several depndencies saved in our package.json, including body-parser, express, express-handlebars, method-override, mysql, and path.&nbsp; Our views directory contains what our user sees when the site is deployed on our server. &nbsp;The main.handlebars takes in the html from our index.handlebars file using handlebars.&nbsp;
<img src="public/assets/img/handlebars.jpg" alt="Drawing" style="width: 250px; float: right;" /> 
<br><br><br><br><br><br><br><br>**Happy Eating!**