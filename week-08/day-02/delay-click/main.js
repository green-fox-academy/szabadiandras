'use strict';

// Create a simple HTML document with one button. 
// If the user clicks the button it should wait 2 seconds 
// and it should show a text under the button: 2 seconds ellapsed

const button = document.querySelector('button');
const text = document.querySelector('p')

let time = setInterval(() => {
  ++elapsed;
}, 1000);

button.addEventListener('click', function (event) {
  text.innerHTML = time + ' seconds elapsed.'
  console.log('Button pressed. Elapsed time since: ' + (event.timeStamp));
  clearInterval(time);
});

/*
function myFunction() {
  setTimeout(function () { alert("Hello"); }, 3000);
}
*/