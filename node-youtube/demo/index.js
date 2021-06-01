const http = require('http')

const server = http.createServer((rew, res) => {
	res.end('<h1>Hello NodeJS</h1>')
})

server.listen(4000, () => {
	console.log('server has been started')
})