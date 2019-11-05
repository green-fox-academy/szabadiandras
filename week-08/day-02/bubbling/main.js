'use strict';

const nav = document.querySelector('nav');
const inspector = document.getElementsByClassName(".img-inspector");

nav.addEventListener('click', function (event) {
  if (event.target.attributes[1].value === 'up') {
    console.log('Up');
    
  } else if (event.target.attributes[1].value === 'down') {
    console.log('Down');
    inspector
  } else if (event.target.attributes[1].value === 'left') {
    console.log('Left');
    inspector
  } else if (event.target.attributes[1].value === 'right') {
    console.log('Right');
    inspector
  } else if (event.target.attributes[1].value === 'in') {
    console.log('Zoom-in');
    inspector
  } else if (event.target.attributes[1].value === 'out') {
    console.log('Zoom-out');
    inspector
  }
});