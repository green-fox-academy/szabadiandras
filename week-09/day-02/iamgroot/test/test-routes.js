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

/*
test("groot endpoint", t => {
  request(app)
    .get("/groot")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function(err, res) {
      t.error(err, "No error");
      t.equal(res.query.message, true, "Status is OK");
      t.equal(res.body.translated, "I am Groot!", "Correct response message");
      t.equal(res.query.message, false, "Status is NOT OK");
      t.equal(res.body.error, "I am Groot!", "Correct error message");
      t.end();
    });
});

test('Correct pokemons returned by ID', function (t) {
  request(app)
    .get('/api/pokemon/5')
    .expect('Content-Type', /json/)
    .expect(404)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.deepEqual(res.body, {"error": "No pokemon found with this ID"}, 'Correct pokemon');
      t.end();
    });
});
*/
