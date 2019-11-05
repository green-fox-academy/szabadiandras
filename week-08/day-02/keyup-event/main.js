'use strict'

let body = document.querySelector('body');
let h1 = document.querySelector('h1')

body.addEventListener('keypress', function(event){
  h1.innerHTML = `Last pressed key code is: ${event.keyCode}, ${event.code}`;
  console.log(event);
});