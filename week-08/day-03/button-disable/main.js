'use strict';

const userInput = document.getElementsByTagName('input')
const signupButton = document.getElementsByTagName('signupButton');

document.addEventListener('click', function (event) {
  if (userInput['cat'].checked == true || userInput['dog'].checked == true) {
    document.getElementById('signupButton').removeAttribute("disabled");
    console.log('Sign up button enabled.')
  } else if (userInput['viktor'].checked == true) {
    document.getElementById('signupButton').removeAttribute("disabled");
    console.log('Sign up button temporarily enabled.')
  } else {
    document.getElementById('signupButton').setAttribute("disabled", "");
    console.log('Sign up button disabled.')
  }

});  
  
document.addEventListener('click', function (event) {
  if (userInput['yes'].checked == true) {
    document.getElementById('catButton').removeAttribute("disabled");
    document.getElementById('catButton').style.color = "white";
    console.log('Cat button enabled.')
  } else {
    document.getElementById('catButton').setAttribute("disabled", "");
    document.getElementById('catButton').style.color = "grey";
    console.log('Cat button disabled.')
  }
});