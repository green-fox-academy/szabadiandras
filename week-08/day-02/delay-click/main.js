'use strict';

// Create a simple HTML document with one button. 
// If the user clicks the button it should wait 2 seconds 
// and it should show a text under the button: 2 seconds ellapsed

const button = document.querySelector('button');
const text = document.querySelector('p')

button.addEventListener('click', function (event) {
  setInterval(() => {
    text.innerHTML = '2 seconds elapsed.'
  }, 2000);
});