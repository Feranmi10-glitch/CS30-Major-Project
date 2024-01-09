// Word Scramble
// Oluwaferanmi Akinremi
// November 22nd, 2023.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridArray = [];
let colsA;
let rowsA;
let w = 200;
let b;
let c;
let colsB = 1;
let rowsB = 5;
let colsC = 1;
let rowsC = 5;


class GridA{
  constructor(x, y){
    this.x = x;
    this.y = y;
    
  }

  display(){
    rect(this.x*w, this.y*w, w, w);
  }

}

class GridB{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  display(){
    rect(this.x*b+width/2-80, this.y*b+height/2, b, b);
  }

}

class Box1{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 100;
  }

  display(){
    fill("blue");
    square(this.x, this.y, this.size);
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  if(height > width){
    colsA = Math.floor(width/w);
    rowsA = Math.floor(width/w);
  }
  else{
    colsA= Math.floor(height/w);
    rowsA = Math.floor(height/w);
  }
  
  for(let y = 0; y < colsA; y++ ){
    for(let x = 0;  x< rowsA; x++){
      let cell = new GridA(x,y);
      gridArray.push(cell);
    }
  }
  
  if(height > width){
    b = Math.floor(width/colsB);
  }
  else{
    b = Math.floor(height/rowsB);
  }
  
  for(let y = 0; y < colsB; y++ ){
    for(let x = 0;  x< rowsB; x++){
      let cell2 = new GridB(x,y);
      gridArray.push(cell2);
    }
  }
  c = new Box1(width+10, height/2);
}


function draw() {
  background("white");
  for(let x = 0; x < gridArray.length;x++){
    gridArray[x].display();
  }
  
 
}



