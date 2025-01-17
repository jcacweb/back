const express = require('express');
const app = express();


/// AID
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json()); // to turn request into JSON

const cors = require('cors');
app.use(cors()); // to prevent resource error





/// DEV
const morgan = require('morgan');
app.use(morgan('dev')); // to show request

require('dotenv').config();


/// ROUTING
const route = require('./route');
app.use("/",route);





/// START
const http = require('http');

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
console.log('Server created at: ' + (process.env.PORT | 3001));