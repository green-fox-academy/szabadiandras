'use strict'

let button = document.querySelector('button')

let list = document.querySelectorAll('li')

let result = document.querySelector('.result')

button.addEventListener('click', function(){
  result.innerHTML = list.length;
});