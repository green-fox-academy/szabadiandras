'use strict';

let nav = document.querySelector('nav');

nav.addEventListener('click', function(event){
  console.log('Clicked');
  console.log(event);
});
