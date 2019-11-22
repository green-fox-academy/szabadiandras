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
        let remove = document.createElement("button");

    posts.classList.add("post");

    votes.classList.add("navigation");
      votes.setAttribute("id", response.posts[i].id);
      
      upvote.classList.add("upvote");
      //upvote.setAttribute("action", "up");
        upvote.setAttribute("id", response.posts[i].id);
        upvote.setAttribute("value", "up");

      downvote.classList.add("downvote");
      //downvote.setAttribute("action", "down");
        downvote.setAttribute("id", response.posts[i].id);
        downvote.setAttribute("value", "down");
      
      score.classList.add("score");
        score.setAttribute("id", response.posts[i].id);
        score.innerText = response.posts[i].score;

    content.classList.add("arena");
      title.innerText = response.posts[i].title;
      
      link.innerText = response.posts[i].url;
        link.setAttribute("href", response.posts[i].url);
        link.classList.add("link");
      
      const stamp = response.posts[i].timestamp;
      timestamp.innerText = stamp;
        timestamp.setAttribute("href", response.posts[i].timestamp);
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
        remove.innerText = "remove";
          remove.setAttribute("href", "");
          remove.setAttribute("value", "remove");
          remove.setAttribute("id", response.posts[i].id);
          remove.classList.add("options", "remove", "warn");

    main.appendChild(posts);
      posts.appendChild(votes);
        votes.appendChild(upvote);
        votes.appendChild(score);
        votes.appendChild(downvote);
      posts.appendChild(content);
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
  };
};
    
index.send();

// USER ACTION CONTROL

let scoreHandler = document.querySelector('article');

scoreHandler.addEventListener('click', function(event) {
  let response = JSON.parse(index.responseText);
  let postID = event.target.id;
  let action = event.target.value;
  let newRequest = new XMLHttpRequest();

  let score = document.querySelector('.score');
  let upvote = document.querySelector('.upvote');
  let downvote = document.querySelector('.downvote');
  
  // VOTING
  
  if (postID !== undefined && action == 'up') {
    newRequest.open('PUT', `http://localhost:8080/posts/${postID}/upvote`, true);
    console.log(newRequest.responseText);
    console.log(event);
    console.log(`Upvote has been clicked on postID:${postID}`);
    console.log(scoreHandler);  
    console.log(response);

    newRequest.send();
  }

  if (postID !== undefined && action == 'down') {
    newRequest.open('PUT', `http://localhost:8080/posts/${postID}/downvote`, true);
    console.log(newRequest.responseText);
    console.log(event);
    console.log(`Downvote has been clicked on postID:${postID}`);
    newRequest.send();
  }
  
  // REMOVE

  if (postID !== undefined && action == 'remove') {
    newRequest.open('DELETE', `http://localhost:8080/posts/${postID}/remove`, true);
    console.log(newRequest.responseText);
    console.log(event);
    console.log(`Post with postID:${postID} has been deleted`);
    newRequest.send();
  }
});



/*
const downvote = document.querySelector('.downvote');
const score = document.querySelector('.score');
let counter = 0;

  const upvote = document.querySelector('.upvote');
  upvote.addEventListener('click', function() {
    console.log('Upvote has been clicked.');  
  });

  downvote.addEventListener('click', function() {
    console.log('Downvote has been clicked.');
    score.innerHTML = counter -= 1;
  });

index.send();
*/
