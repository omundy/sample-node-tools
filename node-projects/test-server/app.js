/**
 *	App file - ties all the modules together
 */

// dependencies
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const port = 3000;

// set a whole project directory as public
app.use(express.static('../../')); // this parent directory
// app.use(express.static('../../../learn-javascript/')); // to test another project


// add a route to create a proxy to another server
// access endpoint at: http://localhost:3000/proxy
app.get('/proxy', (req, res) => {
	fetch('https://api.n2yo.com/rest/v1/satellite/above/41.702/-76.014/0/90/ANY/&apiKey=XFR4Y5-ULWYWF-H64T3J-4OKO')
		.then(apiResponse => apiResponse.text())
		.then(text => {
			// convert the API response string to JSON
			let json = JSON.parse(text);
			// console.log(json);
			// return JSON to endpoint
			res.json(json);
		})
		.catch(err => {
			console.error("ERROR", err);
			res.json({
				"ERROR": err
			});
		});
});


// export app for server, server-http, heroku, etc.
module.exports = [app, port];
