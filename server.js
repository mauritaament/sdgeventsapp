const express=require('express');
const cookieParser=require('cookie-parser');
var bodyParser=require('body-parser');
var request = require("request");
const firebaseauth = require('./routes/firebaseauth.js');
const app=express();
const port = process.env.PORT || 5000;
const path = require('path');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
/*
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With,If-None-Match,Last-Modified');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});*/

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//build mode
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

app.use('/api/firebaseauth', firebaseauth);







app.listen(port,()=> console.log(`Example app listening on port ${port}`))