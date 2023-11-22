// Word Scramble
// Oluwaferanmi Akinremi
// November 23rd, 2023.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (height > width) {
    cellSize = width/3;
  }
  else {
    cellSize = height/3;
  }
  grid = generateEmptyGrid(3, 3);
}


function draw() {
  background(220);
  displayGrid();
}

function displayGrid(){
  for(let y = 0; y < 3; y++){
    for(let x = 0;x < 3; x++){
      if(grid[y][x] === 0){
        fill("black");
      }
    }
  }
}

function generateEmptyGrid(cols, rows) {
  let randomArray = [];
  for (let y = 0; y < cols; y++) {
    randomArray.push([]);
    for (let x = 0; x < rows; x++) {
      randomArray[y].push(0);
    }
  }
  return randomArray;
}
