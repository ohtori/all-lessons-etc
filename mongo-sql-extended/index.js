const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const mainRouter = require('./mainRouter');
const PORT = process.env.PORT || 4200;
const app = express();


app.use(express.json({ extended: true }));

app.use('/api', mainRouter);

app.use('/', express.static(path.join(__dirname, 'client')));

app.get('/sql', (req, res) => {
  res.sendFile(path.join(__dirname, 'sql.html'));
});



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

async function start() {
  try {
    await mongoose.connect('mongodb+srv://ohtori:09031991Akio@cluster0.k3q0u.mongodb.net/Cars?retryWrites=true&w=majority', { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => {
      console.log('Server started on port: ', PORT);
    });
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();