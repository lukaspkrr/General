var express = require('express')
	,app = express();

app.use(express.static('./public'));

app.set('views', './public');

module.exports = app;