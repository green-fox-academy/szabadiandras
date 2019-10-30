const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.get('/', (req, res) => {
  // res.send('OK!');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\nServer is running.\nAccess at "localhost:${PORT}"`);
});