"use strict";

let promise = new Promise(function(fulfill, rejected) {
  fulfill("FULFILLED");
  rejected(new Error("ERROR"));
});

promise.catch(function(error) {
  console.error("ERROR");
});

Promise.resolve("PROMISE.RESOLVE");

Promise.reject(new Error("PROMISE.REJECT"));