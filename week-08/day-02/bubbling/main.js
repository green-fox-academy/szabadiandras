'use strict';

const nav = document.querySelector('nav');
const inspector = document.querySelector('.img-inspector');

nav.addEventListener('click', function (event) {
  if (event.target.attributes[1].value === 'up') {
    console.log('Up');
  
  } else if (event.target.attributes[1].value === 'down') {
    console.log('Down');
  
  } else if (event.target.attributes[1].value === 'left') {
    console.log('Left');
    
  } else if (event.target.attributes[1].value === 'right') {
    console.log('Right');
    inspector.style.margin = "20"
  } else if (event.target.attributes[1].value === 'in') {
    console.log('Zoom-in');
    inspector.style.backgroundSize = "300%"
  } else if (event.target.attributes[1].value === 'out') {
    console.log('Zoom-out');
    inspector.style.backgroundSize = "100%"
  }
});