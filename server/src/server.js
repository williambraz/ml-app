const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const cors = require('./cors');
const config = require('./config');

const _config = new config();
const server = express();

var router = express.Router();   

router.get('/items', function(req, res) {
	const id = req.query.id
    request({
	    uri: _config.api + 'sites/MLA/search?q=' + id,
	}).pipe(res);
});

router.get('/items/:id', function (req, res){
	const id = req.params.id
    request({
	    uri: _config.api + 'items/' + id,
	}).pipe(res);
});

router.get('/items/:id/description', function (req, res){
	const id = req.params.id
    request({
		uri: _config.api + 'items/' + id + '/description',
	}).pipe(res);
});

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json()); 
server.use(cors);
server.use('/api', router);

server.listen(_config.port);
console.log('Server da APP do ML rodando na porta: ' + _config.port);