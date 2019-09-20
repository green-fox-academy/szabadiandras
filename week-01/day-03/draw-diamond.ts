'use strict';

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount = 5;
let actLine = 0;
let star = "*";
let space= " ";
let lines = "\n";

function diamond(actLine){
  if(actLine < lineCount){    
    let i: number;
    for (i=0;i<lineCount-actLine-1;i++) lines+=space;
    for (i=0;i<=actLine*2;i++) lines+=star;
    for (i=0;i<lineCount-actLine-1;i++) lines+=space;
    lines+="\n"
    diamond(++actLine);
  }else{
    //console.log(lines)    
  }    
 
}
diamond(actLine);