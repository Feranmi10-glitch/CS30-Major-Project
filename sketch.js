// Word Scramble
// Oluwaferanmi Akinremi
// November 22nd, 2023.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridArray = [];
let colsA = 3;
let rowsA = 3;
let w;
let b;
let colsB = 1;
let rowsB = 5;

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
    rect(this.x*b, this.y*b, b, b);
  }

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  if(height > width){
    w = Math.floor(width/colsA);
  }
  else{
    w = Math.floor(height/rowsA);
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
}


function draw() {
  background("white");
  for(let x= 0; x<gridArray.length;x++){
    gridArray[x].display();
  }
  
}


