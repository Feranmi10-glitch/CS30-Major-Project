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

class GridC{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.letter1 = "E";
    this.letter2 = "N";
    this.letter3 = "R";
    this.letter4 = "D";
    this.letter5 = "O";
  }

  display(){
    rect(this.x*c+width/2-400, this.y*c+height/2+230, c, c);
    text(this.letter1, this.x*c+width/2-400, this.y*c+height/2+230, c, c);
  }
}

class GridD{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  display(){
    rect(this.x*b+width/2-80, this.y*b+height/2-300, b, b);
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
  if(height > width){
    c = Math.floor(width/colsC);
  }
  else{
    c = Math.floor(height/rowsC);
  }

  for(let y = 0; y < colsC; y++ ){
    for(let x = 0;  x< rowsC; x++){
      let cell3 = new GridC(x,y);
      gridArray.push(cell3);
    }
  }

  for(let y = 0; y < colsC; y++ ){
    for(let x = 0;  x< rowsC; x++){
      let cell3 = new GridD(x,y);
      gridArray.push(cell3);
    }
  }
}


function draw() {
  background("white");
  for(let x = 0; x < gridArray.length;x++){
    gridArray[x].display();
  }
}


