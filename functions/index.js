const functions = require('firebase-functions');
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get('/',function(req,res){
	res.render("home");
})
app.get('/courses',function(req,res){
	res.render("courses");
})
app.get('/about',function(req,res){
	res.render("about");
})
app.get('/faculty',function(req,res){
	res.render("faculty");
})
app.get('/admissions',function(req,res){
	res.render("admissions");
})


exports.app = functions.https.onRequest(app);
