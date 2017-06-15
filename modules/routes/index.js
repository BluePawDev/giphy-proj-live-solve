var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
	console.log('base url hit');
	res.sendFile(path.resolve('public/views/index.html')); // path.resolve starts from root folder v. path.join, etc.
});

module.exports = router;
