'use strict';

let index = new XMLHttpRequest();

index.open('GET', 'http://localhost:8080/posts', true);



const upvote = document.querySelector(".upvote");
const downvote = document.querySelector(".downvote");
const score = document.querySelector(".score")

let counter = 0;

upvote.addEventListener("click", function() {
  console.log("Upvote has been clicked.");
  score.innerHTML = (counter += 1);
});

downvote.addEventListener("click", function() {
  console.log("Downvote has been clicked.");
  score.innerHTML = (counter -= 1);
});

score.addEventListener("click", function(){
  console.log('Score clicked')
});