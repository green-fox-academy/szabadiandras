const express = require('express');
const PORT = 2020;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('main');

  let todo = [
    'get up',
    'survive',
    'go back to bed',
  ];

});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});