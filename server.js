'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
const bodyParser = require('body-parser')

var cors = require('cors');

var app = express();

if(process.env.NODE_ENV === 'development') {
  //Set environment variables for Dev
  const dotenv = require('dotenv').config()
  console.log('Development is running')
}

/** this project needs a db !! **/ 
// mongoose.connect(process.env.DB_URI);

app.use(cors());

//Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}))

//Static routes
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
app.post("/api/shorturl/new", (req, res) => {
  //key/value pair = url: www.google.com
  console.log(req.body)
  res.json({status: 'successful'})
})


app.listen(process.env.port, function () {
  console.log(`Node.js listening on port ${process.env.port}`);
});