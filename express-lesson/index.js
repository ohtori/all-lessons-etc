const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sendRouter = require('./routes/send.router');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({ extended: true }));

app.get('/', (req, res) => {
  app.use('/', express.static(path.join(__dirname, 'views')))
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/api', sendRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started on port: ', PORT);
})