'use strict';

let button = document.querySelector('button')

//First solution
button.addEventListener('click', function(){
  console.log(Date());
  button.disabled = true;
});

//Second solution
button.addEventListener('click', function(){
  console.log(Date());
  button.disabled = true;
});