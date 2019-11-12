const express = require("express");
const app = express();

app.get("/yondu", (req, res) => {
  let distance = req.query.distance;
  let time = req.query.time;
  let speed = distance / time;
  if (distance && time) {
    res.status(200);
    res.json({
      distance: distance,
      time: time,
      speed: speed.toString()
    });
  } else {
    res.status(404);
    res.json({ error: "Invalid input" });
  }
});

module.exports = app;