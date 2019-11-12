"use strict";

const test = require("tape");
const request = require("supertest");
const app = require("../routes");

test("yondu endpoint", t => {
  request(app)
    .get("/yondu")
    .query({
      distance: "1500",
      time: "10",
      speed: "150"
    })
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function(err, res) {
      t.error(err, "No error");
      t.deepEqual(
        res.body,
        {
          distance: "1500",
          time: "10",
          speed: "150"
        },
        "Numbers added"
      );
      t.end();
    });
});

test("yondu endpoint", t => {
  request(app)
    .get("/yondu")
    .expect("Content-Type", /json/)
    .expect(404)
    .end(function(err, res) {
      t.error(err, "No error");
      t.deepEqual(
        res.body,
        {
          error: "Invalid input"
        },
        "Task failed succesfully"
      );
      t.end();
    });
});
