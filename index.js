const express = require('express');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3000;

app.use(compression())
app.use('/root', express.static('root'));
app.use('/public', express.static('public'));

app.get("/", (req, res) => {
    res.send("Express on Vercel");
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);

module.exports = app;