const express = require('express');
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema');

const PORT = 4000;
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

async function start() {
  await mongoose.connect('mongodb+srv://ohtori:09031991Akio@cluster0.hb9jd.mongodb.net/graphql-lesson?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  app.listen(PORT, () => {
    console.log('Server started on port: ', PORT);
  })
}

start();