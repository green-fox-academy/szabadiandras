"use strict";

function createHalfPyramid (height) {
  
  for (var theFirst = 1; theFirst <= height; theFirst++) {
    var row = '';
    
    for (var theSecond = 1; theSecond <= (height - theFirst); theSecond++) {
      row += ' ';
    }
    
    for (var k = 1; k <= theFirst; k++) {
      row += '*';
    }
    
    console.log(row);
  }
}

createHalfPyramid(5);

