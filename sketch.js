// Word Scramble
// Oluwaferanmi Akinremi
// November 22nd, 2023.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridArray = [];
const xOffset = 20;
const xSpacing = 170;

let colsA;
let rowsA;
let gridW = 200;
let gridX;
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
  dShape = loadImage("dShape.png");
  eShape = loadImage("letter E.png");
  nShape = loadImage("nShape.png");
  oShape = loadImage("letter_o_PNG56.png");
  rShape = loadImage("rShape.png");
}

class Grid {
  constructor(x, y, offset){
    this.x = x;
    this.y = y;
    this.offset = offset;
    this.img = null;
  }

  display(){
    rect(this.x*gridX+this.offset[0], this.y*gridX+this.offset[1], gridX, gridX);
    if(this.img !== null) {
      // Display the image at the same coordinates as the rect
      image(this.img, this.x*gridX+this.offset[0], this.y*gridX+this.offset[1], gridX, gridX);
    }
  }

  setImage(img) {
    this.img = img;
  }

}

class GridA extends Grid {
  constructor(x, y) {
    super(x, y, [0, 0]);
  }
}

class GridB extends Grid{
  constructor(x, y){
    super(x, y, [width/2 - 80, height/2]);
  }
}

class GridC extends Grid{
  constructor(x, y){
    super(x, y, [width/2, height-10]);
  }
}

// // class Box{
// //   constructor(loc, x, y, img){
// //     this.x = x;
// //     this.y = y;
// //     this.size = 150;
// //     this.img = img;
// //     this.loc = loc;
// //   }

//   display(){
//     square(this.x-xOffset-xSpacing * this.loc, this.y, this.size);
//     image(this.img, width-xOffset - xSpacing*this.loc , height/2+230, this.size, this.size);
//   }
// }
function setup() {
  createCanvas(windowWidth, windowHeight);
  if(height > width){
    colsA = Math.floor(width/gridW);
    rowsA = Math.floor(width/gridW);
  }
  else{
    colsA= Math.floor(height/gridW);
    rowsA = Math.floor(height/gridW);
  }
  
  for(let y = 0; y < colsA; y++ ){
    for(let x = 0;  x< rowsA; x++){
      let cell = new GridA(x,y);
      gridArray.push(cell);
    }
  }
  
  if(height > width){
    gridX = Math.floor(width/colsB);
  }
  else{
    gridX = Math.floor(height/rowsB);
  }
  
  for(let y = 0; y < colsB; y++ ){
    for(let x = 0;  x< rowsB; x++){
      let cell2 = new GridB(x,y);
      gridArray.push(cell2);
    }
  }

  if(height > width){
    gridX = Math.floor(width/colsC);
  }
  else{
    gridX = Math.floor(height/rowsC);
  }
  
  for(let y = 0; y < colsC; y++ ){
    for(let x = 0;  x< rowsC; x++){
      let cell3 = new GridC(x,y);
      gridArray.push(cell3);
    }
  }
  // a = new Box(1,400, height/2 +230);
  // b = new Box(2, 400, height/2 +230);
  // c = new Box(3, 400, height/2 +230);
  // d = new Box(4, 400, height/2  +230);
  // e = new Box(5, 400, height/2 +230);
}


function draw() {
  background("white");
  for(let x = 0; x < gridArray.length;x++){
    gridArray[x].display();
  }
  // for(let i = 0; i < 5; i++){
  //   a.display();
  //   b.display();
  //   c.display();
  //   d.display();
  //   e.display();
  // }
  gridArray[10].setImage(eShape);
}

function keyTyped(){
  if(key === "d" ){
    gridArray[10] = dShape;
  }
}
  



