// Word Scramble
// Oluwaferanmi Akinremi
// November 22nd, 2023.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let cellSize;
// const GRID_SIZE1 = 3;
// const GRID_SIZE2 = 1;
// const GRID_SIZE3 = 5;
// const CELL_SPACE1 = 100;
// const CELL_SPACE2 = 800;
// const CELL_SPACE3 = 250;
// const CELL_SPACE4 = 150;
class Cell{
  constructor(gridX, gridY){
    this.gridX = gridX;
    this.gridY = gridY;
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  // if (height > width) {
  //   cellSize = width/5;
  // }
  // else {
  //   cellSize = height/5;
  // }
  
}


function draw() {
  background("black");
  // displayGrid();
}

// function displayGrid(){
//   for(let y = 0; y < GRID_SIZE1; y++){
//     for(let x = 0;x < GRID_SIZE1; x++){
//       rect(x*cellSize+CELL_SPACE1, y*cellSize+CELL_SPACE1, cellSize, cellSize);
//     }
//     for(let y = 0; y < GRID_SIZE2; y++){
//       for(let x = 0;x < GRID_SIZE3; x++){
//         rect(x*cellSize+CELL_SPACE2, y*cellSize+CELL_SPACE3, cellSize, cellSize);
//       }
//       for(let y = 0; y < GRID_SIZE2; y++){
//         for(let x = 0;x < GRID_SIZE3; x++){
//           rect(x*cellSize+height/2, y*cellSize+(height-CELL_SPACE4), cellSize, cellSize);
//         }
//       }
//     }
//   }
// }

// function generateEmptyGrid(cols, rows) {
//   let randomArray = [];
//   for (let y = 0; y < cols; y++) {
//     randomArray.push([]);
//     for (let x = 0; x < rows; x++) {
//       randomArray[y].push(0);
//     }
//   }
//   return randomArray;
// }
