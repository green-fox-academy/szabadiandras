'use strict';
const button = document.querySelector('#click');
const alertGreenFox = () => {
    alert('Green Fox!');
};
// Try mouseover too
button.addEventListener('click', alertGreenFox);

let startTime = 0;
let secondCounter = 0;
let counterInterval;
const measureButton = document.querySelector('#measure');
measureButton.addEventListener('mousedown', function(event){
    //first solution for time measurement
    startTime = event.timeStamp;

    //second solution for time measurement
    counterInterval = setInterval(() => {
        ++secondCounter;
    }, 1000);

});

measureButton.addEventListener('mouseup', function(event){
    //first solution for time measurement
    console.log("The elapsed time is: " + (event.timeStamp - startTime));

    //second solution for time measurement
    clearInterval(counterInterval);
    console.log("The elapsed time is: " + secondCounter);
    secondCounter = 0;
})

let body = document.querySelector('body');
body.addEventListener('click', function(){
    console.log("szia");
}); //this is the optimal solution

for(let i = 0; i < 100; ++i){
    let button = document.createElement('button');
    button.innerHTML = "asdasd";
    /*button.addEventListener('click', function(){
        console.log("asdhsadhadkjhdjka");
    }); --> this is not very optimal solution */
    body.appendChild(button);
}
