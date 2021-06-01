const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('config');

const PORT = process.env.PORT || config.get('port');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routers/AuthRouter'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

async function start() {
  await mongoose.connect(config.get('dbURL'), {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  });

  app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
  })
}

start();
