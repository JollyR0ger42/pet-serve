const express = require('express');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 8080;

app.use(compression())
app.use(express.static('root'));
app.use(express.static('public'));
app.use(express.static('test-getwin'));

app.listen(port);
console.log('Server started at http://localhost:' + port);