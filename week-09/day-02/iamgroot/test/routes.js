"use strict";

const test = require("tape");
const request = require("supertest");
const app = require("../routes");

test("groot endpoint", t => {
  request(app)
    .get("/groot")
    .query({ received: "message" })
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function(err, res) {
      t.error(err, "No error");
      t.deepEqual(res.body, { error: "I am Groot!" }, "Message not added");
      t.end();
    });
});

test("groot endpoint", t => {
  request(app)
    .get("/groot")
    .query({ received: undefined })
    .expect("Content-Type", /json/)
    .expect(404)
    .end(function(err, res) {
      t.error(err, "No error");
      t.deepEqual(res.body, { error: "I am Groot!" }, "Message not added");
      t.end();
    });
});