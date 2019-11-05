'use strict';

let button = document.querySelector('button');

//First solution
button.addEventListener('click', function () {
  console.log(Date());
  button.disabled = true;
});

//Second solution
/*
let counter = document.querySelectorAll('button');
button.addEventListener('click', function () {

  for (let i = 0; i <= counter.length-1; i++) {
    console.log(Date());
  }
  counter = 0;
});
*/