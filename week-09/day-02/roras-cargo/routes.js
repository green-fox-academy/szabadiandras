const express = require("express");
const app = express();

// GET /ROCKET

app.get("/rocket", (req, res) => {
  let caliber25 = req.query.caliber25;
  let caliber30 = req.query.caliber30;
  let caliber50 = req.query.caliber50;
  let shipstatus = req.query.shipstatus;
  let ready = req.query.ready;
  if (caliber25 && caliber30 && caliber50 && shipstatus && ready) {
    res.status(200);
    res.json({
        "caliber25": caliber25,
        "caliber30": caliber30,
        "caliber50": caliber50,
        "shipstatus": shipstatus,
        "ready": ready
    });
  } else {
    res.status(404);
    res.json({ error: "Invalid input" });
  }
});

// GET /ROCKET/FILL

app.get("/rocket/fill", (req, res) => {
  let caliber = req.query.caliber;
  let amount = req.query.amount;
  if (caliber && amount) {
  res.status(200);
  res.json({
      "received": ".50",
      "amount": 5000,
      "shipstatus": "40%",
      "ready": false
    });
  } else {
    res.status(404);
    res.json({ error: "Invalid input" });
  }
});

module.exports = app;