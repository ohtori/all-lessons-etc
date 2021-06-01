const path = require('path');
const fs = require('fs');
const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const filePath = path.join(__dirname, 'test', 'myFile.txt');

// let count = 0;

// function cin() {
// 	let text = '';
// 	console.log(count);
// 	rl.question('Please tap the word', (answer) => {
// 		text = answer;
// 		fs.appendFile(filePath, text, err => {
// 			if (err) {
// 				throw err;
// 			}
// 			console.log('File was writed');
// 		});
// 		if (++count < 5) {
// 			cin();
// 		} else {
// 			rl.close();
// 		}
// 	});
// }
// cin();

// fs.writeFile(path.join(__dirname, 'test', 'myFile2.txt'),  'Hello', err => {
// 	if (err) throw err;
// });

fs.readFile(filePath, (err, data) =>{
	if (err) {
		throw err;
	}
	const decoder = new TextDecoder('utf-8');
	console.log(decoder.decode(data));
});