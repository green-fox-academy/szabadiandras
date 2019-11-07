'use strict'

let promise = new Promise(function (fulfill, rejected) {
  setTimeout(() => {
    rejected('REJECTED!');
  }, 300);
});

function onReject(error) {
  console.log(error.messsage);
};

promise.then(null, rejected);