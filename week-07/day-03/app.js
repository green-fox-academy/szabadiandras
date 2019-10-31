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

  console.log(req.query.name, req.query.title);

  if (req.query.name && req.query.title) {
    var message = {
      "welcome_message": "Oh, hi there " + req.query.name + ", my dear " + req.query.title + "!"
    }
  } else if (req.query.name == undefined || req.query.title == undefined) {
    var message = {
      "error": "Please provide a name and a title!"
    }
  }

  res.send(message);
  
});

// APPENDA

app.get('/appenda/:appendable', (req, res) => {
  if (req.params.appendable) {
    var appended = req.params.appendable + 'a'
    res.send(appended);
  } else {
    res.status(404);
  }
});

// DO UNTIL

app.post('/dountil/:action', (req, res) 

  console.log("called");
  //console.log(req.body); -> it only works with body parser package

  res.status(200);
  res.send("OK");
});

// localhost

app.listen(PORT, () => {
  console.log(`\nServer is running.\nAccess at "localhost:${PORT}"`);
});