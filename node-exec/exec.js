const { exec, execFile, spawn, fork } = require('child_process');

exec('cd C://Games/Mafia II & launcher', (err, stdout, stderr) => {
  if (err) {
    console.log(err.message);
  }

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
})


