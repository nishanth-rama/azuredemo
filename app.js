// simple mvc node js code  

const express = require('express');
const app = express();
const controller = require('./controller');

// Define routes

app.use('/', controller);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

