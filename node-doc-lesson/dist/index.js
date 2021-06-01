// const zlib = require('zlib');
// const http = require('http');
// const fs = require('fs');
// const { pipeline } = require('stream');
// const path = require('path');

// const onError = (err) => {
//   if (err) {
//     response.end();
//     console.error('An error occurred:', err);
//   }
// };

// const getContentType = (pathName) => {
//   switch (pathName) {
//     case '.css': return 'text/css';
//     case '.js': return 'text/javascript';
//     default: return 'text/html';
//   }
// }

// http.createServer((req, response) => {
//   const filePath = req.url === '/' ?
//     path.join(__dirname, 'main.html'):
//     path.join(__dirname, req.url);

//   const contentType = getContentType(path.extname(req.url));

//   const raw = fs.createReadStream(filePath);
//   // Store both a compressed and an uncompressed version of the resource.
//   response.setHeader('Vary', 'Accept-Encoding');
//   let acceptEncoding = req.headers['accept-encoding'];
//   if (!acceptEncoding) {
//     acceptEncoding = '';
//   }

//   if (/\bdeflate\b/.test(acceptEncoding)) {
//     response.writeHead(200, { 'Content-Encoding': 'deflate', 'Content-Type': contentType });
//     pipeline(raw, zlib.createDeflate(), response, onError);
//   } else if (/\bgzip\b/.test(acceptEncoding)) {
//     response.writeHead(200, { 'Content-Encoding': 'gzip', 'Content-Type': contentType });
//     pipeline(raw, zlib.createGzip(), response, onError);
//   } else if (/\bbr\b/.test(acceptEncoding)) {
//     response.writeHead(200, { 'Content-Encoding': 'br', 'Content-Type': contentType });
//     pipeline(raw, zlib.createBrotliCompress(), response, onError);
//   } else {
//     response.writeHead(200, {});
//     pipeline(raw, response, onError);
//   }
// }).listen(4000);

// const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });


// const cp = require('child_process');
// const osCPUs = require('os').cpus().length;

// let fullData = '';
// let dataChunks = 0;

// const spawnProcess = cp.spawn('curl', ['https://izh-visitka.ru']);
// spawnProcess.stderr.on('error', err => {
//   console.log(`stderr: |${err}`);
// });
// spawnProcess.stdout.on('data', data => {
//   fullData += data;
//   dataChunks++;
//   console.log(fullData);
//   console.log(dataChunks);
// });

// const http = require('http');
// const cluster = require('cluster');

// if (cluster.isMaster) {
//   const osCPUs = require('os').cpus().length;

//   for (let i = 0; i < osCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('fork', worker => console.log(worker.id));
//   cluster.on('listening', (worker, adress) => console.log(worker.id, adress));
//   cluster.on('exit', (worker) => console.log(worker.id, 'is Dead'));
// } else {
//   const server = http.createServer((req, res) => {
//     console.log(123);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('<h1>Hello World</h1>');
//   });
//   server.listen(4000, (err) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(`server started`);
//   })
  
// }

const ProgressBar = require('progress');

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)

