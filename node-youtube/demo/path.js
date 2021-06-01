const path = require('path')

console.log('Название файла', path.basename(__filename))
console.log('Имя директории', path.dirname(__filename))
console.log('Расширение', path.extname(__filename))
console.log('Parser', path.parse(__filename).name)
console.log('Parser', path.join(__dirname, 'server', 'index.html'))