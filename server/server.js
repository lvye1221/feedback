
// lib
var express = require('express');
var mongoose = require('mongoose');


var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	res.send('hello world');
});


// 使用静态文件目录
app.use(express.static('public'));


// 连接数据库
// var port = process.env.PORT || 8080;
var config = require('./config');

var port = config.port || 8080;


// console.log(config.database);

mongoose.connect(config.database);



// router

var userRouter = require('./router/user');


app.use('/user', userRouter);


app.listen(port);

console.log('Magic happends at http://localhost:' + port);
