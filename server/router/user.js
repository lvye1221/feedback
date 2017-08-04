

var express = require('express');
var app = express();

var User = require('../model/user');
var config = require('../config');
app.set('superSecret', config.secret);


var apiRoutes = express.Router();



apiRoutes.get('/auth', function(req, res) {

	console.log("请求用户名", req.body.name);
	
	User.findOne({
		name: req.body.name
	}, function(err, user) {
		if (err) {
			return res.json({success: false, message: "查询用户失败：" + err})
		};

		console.log(user);

	});

});

module.exports = apiRoutes;
