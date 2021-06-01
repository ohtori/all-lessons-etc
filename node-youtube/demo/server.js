const http = require('http')

const server = http.createServer((rew, res) => {
	res.end('Hello NodeJS')
})

server.listen(4000, () => {
	console.log('server has been started')
})