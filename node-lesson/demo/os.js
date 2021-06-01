const os = require('os');

console.log('Op Syst', os.platform());
console.log('Architecture', os.arch());
console.log('Proc', os.cpus());
console.log('Free Memory', os.freemem());
console.log('Total Memory', os.totalmem());
console.log('Home dir', os.homedir());
console.log('Work time', os.uptime());