const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'test', 'test.txt')

fs.readFile(filePath, 'utf-8',  (error, content) => {
	if (error) {
	    throw error
	}

	console.log('content: ', content)
})