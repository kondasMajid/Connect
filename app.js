/**
 * Created by raaj on 7/12/17.
 */
//Adding modules
const express = require('express');
const http = require('http');
const path = require('path');

//Instantiating new server with Express.
const app = express();

//Adding some essential middle-wares.
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	//Setting ejs as the template engine, will be used in the future.
	app.set('view engine', 'ejs');
	app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (request, response) {
	response.render('index');
});


app.listen(3000);