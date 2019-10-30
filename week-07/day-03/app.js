const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// DOUBLING

app.get('/doubling', (req, res) => {
  if (req.query.input !== isNaN) {
    var input = {
      "received": req.query.input,
      "result": req.query.input * 2
    }
  } else if (req.query.input == isNaN) {
    var input = {
      "error": "Please provide an input!"
    }
  }

  res.send(input);

});

// GREETER

app.get('/greeter', (req, res) => {

  if (req.query.name && req.query.title) {
    console.log('welcome message displayed');
    var message = {
      "welcome_message": "Oh, hi there " + req.query.name + ", my dear " + req.query.title + "!"
    }
  } else if (req.query.name == false || req.query.title == false) {
    console.log('error message displayed');
    var message = {
      "error": "Please provide a name and a title!"
    }
  }

  res.send(message);
  
});

app.listen(PORT, () => {
  console.log(`\nServer is running.\nAccess at "localhost:${PORT}"`);
});