let lineCount = 10;
var actLine = 0;
var star = "*";
var space= " ";
var lines = "\n"; // staring with a new line due to JS console behaviour :)

function pyramid(actLine){
  //check if actLine reached lineCount
  if(actLine < lineCount){
    //do indent
    for (i=0;i<=lineCount-actLine;i++){
       lines+=space;
    }  

    //do stars
    for (i=0;i<=actLine*2;i++){
      lines+=star;
    }  
    
    // end & append line
    lines+="\n"
   
    //recursice call pyramid
    pyramid(++actLine);
  
  }else{
    //linecount reached
    //print the pyramid
    console.log(lines)    
  }    
 
}

pyramid(actLine);
ű


--

var lineCount = 10;
var actLine = 0;
var star = "*";
var space= " ";
var lines = "\n"; // staring with a new line due to JS console behaviour :)

function pyramid(actLine){
  //check if actLine reached lineCount
  if(actLine < lineCount){
    //do indent
    for (i=0;i<=lineCount-actLine;i++){
       lines+=space;
    }  

    //do stars
    for (i=0;i<=actLine*2;i++){
      lines+=star;
    }  
    
    // end & append line
    lines+="\n"
   
    //recursice call pyramid
    pyramid(++actLine);
  
  }else{
    //linecount reached
    //print the pyramid
    console.log(lines)    
  }    
 
}

pyramid(actLine);


űűű

var lineCount = 20;
var actLine = 0;
var star = "*";
var space= "-";
var lines = "\n"; // starting with a new line due to JS console behaviour :)

function pyramid(actLine){
  //check if actLine reached lineCount
  if(actLine < lineCount){
    //do indent
    for (i=0;i<lineCount-actLine-1;i++){
       lines+=space;
    }  

    //do stars
    for (i=0;i<=actLine*2;i++){
      lines+=star;
    }  

    //do indent
    for (i=0;i<lineCount-actLine-1;i++){
       lines+=space;
    }  

    
    // end & append line
    lines+="\n"
   
    //recursice call pyramid
    pyramid(++actLine);
  
  }else{
    //linecount reached
    //print the pyramid
    console.log(lines)    
  }    
 
}

pyramid(actLine);



---
let lineCount = 7;
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
    //console.log(lines)    
  }    
 
}
pyramid(actLine);



function pyramid2(actLine){
    if(actLine < lineCount){    
      let i: number;
      for (i=0;i<lineCount-actLine-1;i++) lines+=space;
      for (i=0;i<=actLine*2;i++) lines+=star;
      for (i=0;i<lineCount-actLine-1;i++) lines+=space;
      lines+="\n"
      pyramid2(++actLine);
    }else{
      console.log(lines)    
    }    
   
  }
  pyramid2(actLine);