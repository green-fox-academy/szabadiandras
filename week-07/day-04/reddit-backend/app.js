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

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Main page');
});

app.get('/hello', function (req, res) {
  console.log("hello world")
  res.send('Hello');
});


//GET POSTS

app.get('/posts', (req, res) => {
  const query = "SELECT * FROM post"
  conn.query(query, (err, posts) => {
    res.setHeader("Content-type", "application/json");
    res.status(200);
    res.send(JSON.stringify(posts));
  });
});


//NEW POST

app.post('/posts', function (req, res) {
  const dateObj = new Date();
  const date = `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
  const query = `INSERT INTO reddit.post (title, url, timestamp, score) VALUES ('${req.body.title}', 'localhost:8080/posts/${req.body.title}', '${date}', '0')`
  conn.query(query, (err, post) => {
    console.log(err)
    console.log(post);
    const query = `SELECT * FROM post WHERE id=${post.insertId}`
    conn.query(query, (err, post) => {
      res.setHeader("Content-type", "application/json");
      res.status(200);
      res.send(JSON.stringify(post) + `\n${req.body.title} is added to posts.`);
    })
  });
});


//UPVOTE

app.put('/posts/:id/upvote', function (req, res) {
  const query = `UPDATE reddit.post SET score = score + 1 WHERE (id = ${req.params.id})`
  conn.query(query, (err, posts) => {
    console.log(err)
    res.setHeader("Content-type", "application/json");
    res.status(200);
    res.send(JSON.stringify(query) + `\nThe post "${req.body.title}" has been upvoted.`);
  });
});


//DOWNVOTE

app.put('/posts/:id/downvote', function (req, res) {
  const query = `UPDATE reddit.post SET score = score - 1 WHERE (id = ${req.params.id})`
  conn.query(query, (err, posts) => {
    console.log(err)
    res.setHeader("Content-type", "application/json");
    res.status(200);
    res.send(JSON.stringify(query) + `\nThe post "${req.body.title}" has been downvoted. Current score is ${req.body.score}`);
  });
});


//DELETE (optional)

app.delete('/posts/:id', function (req, res) {
  const query = `DELETE FROM reddit.post WHERE id = ${req.params.id}`
  conn.query(query, (err, posts) => {
    res.setHeader("Content-type", "application/json");
    res.status(200);
    res.send(JSON.stringify(query) + '\n' + req.params.id + ' is deleted.');
  });
});


//PUT (optional)

app.put('/posts/:id', function (req, res) {
  res.send(req.params.id);
});

app.listen(PORT, () => {
  console.log(`\nServer is running\nListening on port ${PORT}`);
});
