'use strict';

let promise = new Promise(function (fulfill, rejected) {
  fulfill('I FIRED')
  rejected(new Error('I DID NOT FIRE'));
});

function onReject(error) {
  console.log(error.message);
};

promise.then(console.log, onReject);