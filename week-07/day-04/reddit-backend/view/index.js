"use strict";

let index = new XMLHttpRequest();
index.open("GET", "http://localhost:8080/posts", true);
let main = document.querySelector("article");

index.onload = function() {
  let response = JSON.parse(index.responseText);
  for (let i = 0; i < response.posts.length; i++) {

    let posts = document.createElement("div");
    let votes = document.createElement("div");
      let upvote = document.createElement("button");
      let score = document.createElement("p");
      let downvote = document.createElement("button");
    let content = document.createElement("div");
      let title = document.createElement("h1");
      let link = document.createElement("a");
      let timestamp = document.createElement("a");
      let options = document.createElement("div");
        let comments = document.createElement("a");
        let share = document.createElement("a");
        let save = document.createElement("a");
        let hide = document.createElement("a");
        let report = document.createElement("a");
        let modify = document.createElement("a");
        let remove = document.createElement("a");

    posts.classList.add("post");

    votes.classList.add("navigation");
      votes.setAttribute("id", response.posts[i].id);
      upvote.classList.add("upvote");
      upvote.setAttribute("action", "up");
      downvote.classList.add("downvote");
      downvote.setAttribute("action", "down");
      score.innerText = response.posts[i].score;
      score.classList.add("score");

    content.classList.add("arena");
      title.innerText = response.posts[i].title;
      
      link.innerText = response.posts[i].url;
        link.setAttribute("href", response.posts[i].url);
      
      timestamp.innerText = response.posts[i].timestamp
        timestamp.setAttribute("href", response.posts[i].url);
        timestamp.classList.add("time");
      
      options.classList.add("options");
        comments.innerText = "comments";
          comments.setAttribute("href", "");
          comments.classList.add("options");
        share.innerText = "share";
          share.setAttribute("href", "");
          share.classList.add("options");
        save.innerText = "save";
          save.setAttribute("href", "");
          save.classList.add("options");
        hide.innerText = "hide";
          hide.setAttribute("href", "");
          hide.classList.add("options");
        report.innerText = "report";
          report.setAttribute("href", "");
          report.classList.add("options", "warn");
        modify.innerText = "modify";
          modify.setAttribute("href", "");
          modify.classList.add("options", "modify");
        remove.innerText = "delete";
          remove.setAttribute("href", "");
          remove.classList.add("options", "remove", "warn");

    main.appendChild(posts);
    posts.appendChild(votes);
    posts.appendChild(content);
    votes.appendChild(upvote);
    votes.appendChild(score);
    votes.appendChild(downvote);
    content.appendChild(title);
    content.appendChild(link);
    content.appendChild(timestamp);
    content.appendChild(options);
    options.appendChild(comments);
    options.appendChild(comments);
    options.appendChild(share);
    options.appendChild(save);
    options.appendChild(hide);
    options.appendChild(report);
    options.appendChild(modify);
    options.appendChild(remove);
  }
};

index.send();

/*
const upvote = document.querySelector('.upvote');
const downvote = document.querySelector('.downvote');
const score = document.querySelector('.score');
let counter = 0;

upvote.addEventListener('click', function() {
  console.log('Upvote has been clicked.');
  score.innerHTML = counter += 1;
});

downvote.addEventListener('click', function() {
  console.log('Downvote has been clicked.');
  score.innerHTML = counter -= 1;
});

score.addEventListener('click', function() {
  console.log('Score clicked');
});

index.send();
*/