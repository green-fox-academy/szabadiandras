const express = require('express');
const PORT = 4000;
const app = express();

app.use(express.static('../'));

app.get('/', function (req, res) {
  if (req.query.name === undefined) {
    res.render('home.ejs', {name: 'Guest'});
  } else {
    res.render('home.ejs', {name: req.query.name});
  }
  
});

app.listen(PORT);
