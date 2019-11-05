'use strict';

const nav = document.querySelector('nav');
const inspector = document.querySelector('.img-inspector');
let zoom = 200;
let margin = 0;

nav.addEventListener('click', function (event) {
  
  if (event.target.attributes[1].value === 'up') {
    inspector.style.margin = 100
    console.log('Up');
  
  } else if (event.target.attributes[1].value === 'down') {
    inspector.style.backgroundSize = "300%"
    console.log('Down');
  
  } else if (event.target.attributes[1].value === 'left') {
    inspector.style.backgroundSize = "300%"
    console.log('Left');
  
  } else if (event.target.attributes[1].value === 'right') {
    inspector.style.backgroundSize = "300%"
    console.log('Right');
  
  } else if (event.target.attributes[1].value === 'in') {
    zoom += 20;
    inspector.style.backgroundSize = zoom + "%"
    console.log('Zoom-in:'+ inspector.style.backgroundSize);
  
  } else if (event.target.attributes[1].value === 'out') {
    zoom -= 20;
    inspector.style.backgroundSize = zoom + "%"
    console.log('Zoom-out:'+ inspector.style.backgroundSize);
  }
});