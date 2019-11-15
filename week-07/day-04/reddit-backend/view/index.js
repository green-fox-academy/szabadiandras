"use strict";

let index = new XMLHttpRequest();

index.open("GET", "http://localhost:8080/posts", true);
let main = document.querySelector("article");

index.onload = function() {
  let response = JSON.parse(index.responseText);

  for (let i = 0; i < response.posts.length; i++) {
    let posts = document.createElement("div");
    let upvote = document.createElement("button");
    let score = document.createElement("p");

    upvote.classList.add("upvote");
    upvote.setAttribute("action", "upscore");
    score.innerHTML = "QQQ";

    main.appendChild(posts);
  }
};

const upvote = document.querySelector(".upvote");
const downvote = document.querySelector(".downvote");
const score = document.querySelector(".score");

let counter = 0;

upvote.addEventListener("click", function() {
  console.log("Upvote has been clicked.");
  score.innerHTML = counter += 1;
});

downvote.addEventListener("click", function() {
  console.log("Downvote has been clicked.");
  score.innerHTML = counter -= 1;
});

score.addEventListener("click", function() {
  console.log("Score clicked");
});

index.send();
