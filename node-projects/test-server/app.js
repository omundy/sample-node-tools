/**
 *	App file - ties all the modules together
 */

// dependencies
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// set a whole project directory as public
app.use(express.static('../../')); // this parent directory
// app.use(express.static('../../../learn-javascript/')); // to test another project

// export app for server, server-http, heroku, etc.
module.exports = [app, port];
