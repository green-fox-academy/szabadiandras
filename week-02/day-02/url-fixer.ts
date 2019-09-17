'use strict';

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
console.log(url);

url = url.slice(5, -4);
console.log('http:' + url + 'odds');

// url = url.replace("s/","s:/"), url.replace("bots","odds")
// url = url.replace("bots","odds")
// console.log(url)