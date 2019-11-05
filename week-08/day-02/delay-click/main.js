'use strict';

// Create a simple HTML document with one button. 
// If the user clicks the button it should wait 2 seconds 
// and it should show a text under the button: 2 seconds ellapsed

const button = document.querySelector('button');
const text = document.querySelector('p')

let elapsed = 0;

let time = setInterval(() => {
  button.addEventListener('click', function (event) {
    text.innerHTML = elapsed + ' seconds elapsed.'
    clearInterval(elapsed, time);
    console.log('Button pressed. Elapsed time since: ' + (elapsed));
    ++elapsed;
  }, 1000);
});