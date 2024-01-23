// Word Scramble
// Oluwaferanmi Akinremi
// November 22nd, 2023.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//grids
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
}


function draw() {
  background("white");
  for(let x = 0; x < gridArray.length;x++){
    gridArray[x].display();
  }
  gridArray[14].setLetter("e");
  gridArray[15].setLetter("d");
  gridArray[16].setLetter("o");
  gridArray[17].setLetter("n");
  gridArray[18].setLetter("r");
}

function winGame(){
  background("white");
  fill("black");
  textSize(70);
  textFont(titleFont);
  textAlign("center");
  text("LET'S GO", width/2,height/2 );
}

function loseGame(){
  background("white");
  fill("black");
  textSize(70);
  textFont(titleFont);
  textAlign("center");
  text("TRY AGAIN BUD", width/2,height/2 );
}


  



