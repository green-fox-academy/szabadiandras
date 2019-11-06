'use strict';

const userInput = document.getElementsByTagName('input');
const signupButton = document.getElementById('signupButton');
const catButton = document.getElementById('catButton');

document.addEventListener('click', function (event) {
  if (userInput['cat'].checked == true || userInput['dog'].checked == true) {
    signupButton.removeAttribute("disabled");
    console.log('Sign up button enabled.');
  } else if (userInput['viktor'].checked == true) {
    signupButton.removeAttribute("disabled");
    console.log('Sign up button temporarily enabled.');
  } else {
    signupButton.setAttribute("disabled", "");
    console.log('Sign up button disabled.');
  }
});

document.addEventListener('click', function (event) {
  if (userInput['yes'].checked == true) {
    catButton.removeAttribute("disabled");
    catButton.style.color = "white";
    catButton.style.backgroundImage = "linear-gradient(to left bottom, #003585, #6d278b, #ae0078, #da004f, #eb1212)";
    console.log('Cat button enabled.');
  } else {
    catButton.setAttribute("disabled", "");
    catButton.style.color = "grey";
    catButton.style.backgroundImage = "none";
    console.log('Cat button disabled.');
  }
});
