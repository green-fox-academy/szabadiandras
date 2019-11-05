'use strict';

const nav = document.querySelector('nav');

nav.addEventListener('click', function (event) {
  if (event.target.attributes[1].value === 'up') {
    console.log('Up');
    document.getElementsByClassName(".img-inspector")
  } else if (event.target.attributes[1].value === 'down') {
    console.log('Down');
    document.getElementsByClassName(".img-inspector")
  } else if (event.target.attributes[1].value === 'left') {
    console.log('Left');
    document.getElementsByClassName(".img-inspector")
  } else if (event.target.attributes[1].value === 'right') {
    console.log('Right');
    document.getElementsByClassName(".img-inspector")
  } else if (event.target.attributes[1].value === 'in') {
    console.log('Zoom-in');
    document.getElementsByClassName(".img-inspector")
  } else if (event.target.attributes[1].value === 'out') {
    console.log('Zoom-out');
    document.getElementsByClassName(".img-inspector")
  }
});