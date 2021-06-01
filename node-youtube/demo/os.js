const os = require('os')

console.log('OS', os.platform())
console.log('Architect', os.arch())
console.log('Processor', os.cpus())
console.log('free Ram', os.freemem())
console.log('all Ram', os.totalmem())
console.log('Home', os.homedir())
console.log('On time', os.uptime())