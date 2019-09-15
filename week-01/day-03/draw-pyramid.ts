'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount = 4;
let actLine = 0;
let star = "*";
let space= " ";
let lines = "\n";

function pyramid(actLine){
  if(actLine < lineCount){    
    let i: number;
    for (i=0;i<lineCount-actLine-1;i++) lines+=space;
    for (i=0;i<=actLine*2;i++) lines+=star;
    for (i=0;i<lineCount-actLine-1;i++) lines+=space;
    lines+="\n"
    pyramid(++actLine);
  }else{
    console.log(lines)    
  }    
 
}
pyramid(actLine);