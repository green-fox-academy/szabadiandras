'use strict';

const button = document.querySelector('button');
const text = document.querySelector('p')

button.addEventListener('click', function (event) {
  setInterval(() => {
    text.innerHTML = '2 seconds elapsed.'
  }, 2000);
});