const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const expressHBS = require('express-handlebars');
const todosRouter = require('./routes/todos.router');

const app = express();
const hbs = expressHBS.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(todosRouter);

const PORT = process.env.PORT || 4000;

//app.use()

async function start() {
  try {
    const mongo = await mongoose.connect('mongodb+srv://ohtori:09031991Akio@cluster0-qzoi6.mongodb.net/todos', { 
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  app.listen(PORT, () => {
    console.log('Server was started!');
  });
  } catch (e) {
    console.log(e);    
  }
}

start();