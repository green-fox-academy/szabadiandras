const mysql = require('mysql');
const express = require('express');
const PORT = 8080;


let conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'greenfox',
  database: 'reddit',
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    console.log(err);
    return;
  }
  console.log('Connection to database established');
});

let app = express();

app.get('/', function (req, res) {
  res.send('Main page');
});

app.get('/hello', function (req, res) {
  console.log("hello world")
  res.send('Hello');
});

app.get('/posts', (req, res) => {
  const query = "SELECT * FROM post"
  conn.query(query, (err, posts) => {
    res.send(JSON.stringify(posts));
  });
});

app.post('/posts', function (req, res) {
  res.send('Post Posts');
});

app.put('/posts/:id/upvote', function (req, res) {
  res.send(req.params.id);
});

app.put('/posts/:id/downvote', function (req, res) {
  res.send(req.params.id);
});

//DELETE (optional)
app.delete('/posts/:id', function (req, res) {
  res.send(req.params.id);
});

//PUT (optional)
app.put('/posts/:id', function (req, res) {
  res.send(req.params.id);
});

app.listen(PORT, () => {
  console.log(`\nServer is running\nListening on port ${PORT}`);
});