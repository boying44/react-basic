const path = require('path');
const express = require('express');

const app = express();

// PORT=1234 node app.js
app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('view engine', 'pug');
app.set('views', './dist/views');

// adds dist as a root folder
app.use(express.static('dist'));

// routing
app.use(require('./routes/index'));

console.log(app.stack);

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
