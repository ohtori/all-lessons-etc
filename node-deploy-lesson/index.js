const express = require('express');
const path = require('path');

const appServer = express();

const PORT = process.env.PORT || 80;

appServer.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
})

appServer.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'about.html'))
})

appServer.listen(PORT, () => {
	console.log('Server Started!')
})