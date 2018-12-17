const express = require('express');
const router = express.Router();
const path = require('path');
module.exports = router




/// backend


/// frontend
.use(express.static(__dirname + '/expressInitFront/www'))
.get('*', (req, res, next)=>{
	res.sendFile(path.join(__dirname,'/expressInitFront/www/index.html'));
}) 

; 