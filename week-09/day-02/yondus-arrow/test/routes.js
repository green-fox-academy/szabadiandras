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
      t.deepEqual(res.body, { error: "Error" }, "Invalid input");
      t.end();
    });
});