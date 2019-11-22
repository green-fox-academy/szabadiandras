const mysql = require("mysql");
const express = require("express");
const path = require("path");
const PORT = 8080;

const env = require("dotenv").config();
const bodyParser = require("body-parser");

// ^ End of requirements //

let conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "greenfox",
  database: "reddit"
});

conn.connect(function(err) {
  if (err) {
    console.log("Error connecting to Db");
    console.log(err);
    return;
  }
  console.log("Connection to database established\n");
});

let app = express();
app.use(express.json());
app.use(express.static("view"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./view/index.html"));
  console.log('Client request: "Main page".');
});

// GET LOGIN

app.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "./view/login.html"));
  console.log('Client request: "Login page".')
  res.status(200);;
});

//

app.get("/hello", function(req, res) {
  console.log("hello world");
  res.send("Hello World");
});

//GET POSTS

app.get("/posts", (req, res) => {
  const query = "SELECT * FROM post";
  conn.query(query, (err, posts) => {
    res.setHeader("Content-type", "application/json");
    res.status(200);
    res.send({ posts: posts });
    console.log('Client request: "Get posts".');
  });
});

// GET USERS

app.get("/owner", (req, res) => {
  const query = "SELECT * FROM reddit.owner";
  conn.query(query, (err, owner) => {
    res.status(200);
    res.send(JSON.stringify(owner));
    console.log('Client request: "Get Owner database".');
  });
});

//GET POST DATABASE

app.get("/posts/db", (req, res) => {
  const query = "SELECT * FROM post";
  conn.query(query, (err, posts) => {
    res.setHeader("Content-type", "application/json");
    res.status(200);
    res.send(JSON.stringify(posts));
    console.log('Client request: "Get Post database".');
  });
});

//GET FOR NEW POST

app.get("/newpost", function(req, res) {
  res.sendFile(path.join(__dirname, "./view/post.html"));
  console.log('Client request: "New post".');
  res.status(200);
});

//NEW POST

app.post("/posts", function(req, res) {
  const dateObj = new Date();
  const date = `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
  const query = `INSERT INTO reddit.post (title, url, timestamp, score) VALUES ('${req.body.title}', '${req.body.url}', '${date}', '0')`;
  conn.query(query, (err, post) => {
    console.log(err);
    console.log(post);
    const query = `SELECT * FROM post WHERE id=${post.insertId}`;
    conn.query(query, (err, post) => {
      res.setHeader("Content-type", "application/json");
      res.status(200);
      res.send(JSON.stringify(post));
    });
  });
});

//UPVOTE

app.put("/posts/:id/upvote", function(req, res) {
  const query = `UPDATE reddit.post SET score = score + 1 WHERE (id = ${req.params.id})`;
  conn.query(query, (err, post) => {
    console.log("Checking for errors: " + err);
    const query = `SELECT * FROM post WHERE id=${req.params.id}`;
    conn.query(query, (err, post) => {
      res.setHeader("Content-type", "application/json");
      res.status(200);
      res.send(JSON.stringify(post));
      console.log(
        `Client request: "Upvote post called '${req.params.id}' in database".`
      );
    });
  });
});

//DOWNVOTE

app.put("/posts/:id/downvote", function(req, res) {
  const query = `UPDATE reddit.post SET score = score - 1 WHERE (id = ${req.params.id})`;
  conn.query(query, (err, post) => {
    console.log("Checking for errors: " + err);
    const query = `SELECT * FROM post WHERE id=${req.params.id}`;
    conn.query(query, (err, post) => {
      res.setHeader("Content-type", "application/json");
      res.status(200);
      res.send(JSON.stringify(post));
      console.log(
        `Client request: "Upvote post called '${req.params.id}' in database".`
      );
    });
  });
});

//DELETE (optional)

app.delete("/posts/:id", function(req, res) {
  const query = `DELETE FROM reddit.post WHERE id = ${req.params.id}`;
  conn.query(query, (err, post) => {
    console.log("Checking for errors: " + err);
    const query = `SELECT * FROM post WHERE id=${req.params.id}`;
    conn.query(query, (err, post) => {
      res.setHeader("Content-type", "application/json");
      res.status(200);
      res.send(JSON.stringify(post));
      console.log(
        `Client request: "Delete post with title '${req.body.title}' from database".`
      );
    });
  });
});

//MODIFY (optional)

app.put("/posts/:id", function(req, res) {
  res.send(req.params.id);
});

app.listen(PORT, () => {
  console.log(`\nServer is running\nListening on port ${PORT}`);
});
