const express = require('express');
const PORT = 3000;
const app = express();


app.get('/', function (req, res) {
  res.send('This is my awesome webpage');
});


app.listen(PORT);
