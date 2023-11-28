// Word Scramble
// Oluwaferanmi Akinremi
// November 22nd, 2023.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridArray = [];

class Grid{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.gridA = 3;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let theGrid = new Grid(width/2, height/2);
  gridArray.push(theGrid);
  
}


function draw() {
  background("white");
  
}


