// Word Scramble
// Oluwaferanmi Akinremi
// November 22nd, 2023.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (height > width) {
    cellSize = width/5;
  }
  else {
    cellSize = height/5;
  }
  
}


function draw() {
  background("black");
  displayGrid();
}

function displayGrid(){
  for(let y = 0; y < 3; y++){
    for(let x = 0;x < 3; x++){
      rect(x*cellSize+100, y*cellSize+100, cellSize, cellSize);
    }
    for(let y = 0; y < 1; y++){
      for(let x = 0;x < 5; x++){
        rect(x*cellSize+800, y*cellSize+250, cellSize, cellSize);
      }
      for(let y = 0; y < 1; y++){
        for(let x = 0;x < 5; x++){
          rect(x*cellSize+width/2, y*cellSize+500, cellSize, cellSize);
        }
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
