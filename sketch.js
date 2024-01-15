// Word Scramble
// Oluwaferanmi Akinremi
// November 22nd, 2023.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridArray = [];
let colsA;
let rowsA;
let w = 200;
let u;
let a;
let b;
let c;
let d;
let e;
let colsB = 1;
let rowsB = 5;
let colsC = 1;
let rowsC = 5;
let eShape;
let nShape;
let dShape;
let rShape;
let oShape;

function preload(){
  eShape = loadImage("letter E.png");
  oShape = loadImage("oShape.png");
}


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
    rect(this.x*u+width/2-80, this.y*u+height/2, u, u);
  }

}

class Box1{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 150;
  }

  display(){
    square(this.x, this.y, this.size);
    image(eShape,width-400, height/2+230, 150, 150);
  }
}
class Box2{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 150;
  }

  display(){
    square(this.x, this.y, this.size);
    image(oShape,width-570, height/2 +230, 150, 150);
  }
}

class Box3{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 150;
  }

  display(){
    square(this.x, this.y, this.size);
  }
}

class Box4{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 150;
  }

  display(){
    square(this.x, this.y, this.size);
  }
}

class Box5{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 150;
  }

  display(){
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
    u = Math.floor(width/colsB);
  }
  else{
    u = Math.floor(height/rowsB);
  }
  
  for(let y = 0; y < colsB; y++ ){
    for(let x = 0;  x< rowsB; x++){
      let cell2 = new GridB(x,y);
      gridArray.push(cell2);
    }
  }
  a = new Box1(width-400, height/2 +230);
  b = new Box2(width-570, height/2 +230);
  c = new Box3(width-740, height/2 +230);
  d = new Box4(width-910, height/2  +230);
  e = new Box5(width-1080, height/2 +230);
}


function draw() {
  background("white");
  for(let x = 0; x < gridArray.length;x++){
    gridArray[x].display();
  }
  for(let i = 0; i < 5; i++){
    a.display();
    b.display();
    c.display();
    d.display();
    e.display();
  }
 
}



