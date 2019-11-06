let mysql = require('mysql');
let express = require('express');
const PORT = 7000;

let conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'greenfox',
  database: 'bookstore',
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    console.log(err);
    return;
  }
  console.log('Connection established');
});

let app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/books', function (req, res) {
  let query = 'SELECT book_mast.book_name, book_mast.book_price, author.aut_name, category.cate_descrip, publisher.pub_name FROM book_mast LEFT JOIN author ON book_mast.aut_id = author.aut_id LEFT JOIN category ON book_mast.cate_id = category.cate_id LEFT JOIN publisher ON publisher.pub_id = book_mast.pub_id'
  if (req.query && req.query.name) {
    query = 'SELECT book_mast.book_name, book_mast.book_price, author.aut_name, category.cate_descrip, publisher.pub_name FROM book_mast LEFT JOIN author ON book_mast.aut_id = author.aut_id LEFT JOIN category ON book_mast.cate_id = category.cate_id LEFT JOIN publisher ON publisher.pub_id = book_mast.pub_id WHERE book_mast.book_name LIKE "%' + req.query.name + '%"'
  }
  
  conn.query(query, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`\nServer is running.\nAccess at "localhost:${PORT}"`);
});

// conn.end();