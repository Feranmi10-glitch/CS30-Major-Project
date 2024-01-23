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
let f;
let g;
let h;
let i;
let j;
let k;
let l;
let m;
let n;
let o;
let p;
let q;
let r;
let s;
let t;
let u;
let v;
let w;
let x;
let y;
let z;

let colsB = 1;
let rowsB = 5;
let colsC = 1;
let rowsC = 5;
let letters;
let titleFont;
// imported elements
function preload(){
    letters = {
      "a": loadImage("letter_a_PNG2.png"),
      "b": loadImage("letter_b_PNG3.png"),
      "c": loadImage("letter_c_PNG15.png"),
      "d": loadImage("dShape.png"),
      "e": loadImage("letter E.png"),
      "f": loadImage("letter_f_PNG2.png"),
      "g": loadImage("letter_g_PNG10.png"),
      "h": loadImage("letter_h_PNG1.png"),
      "i": loadImage("letter_i_PNG16.png"),
      "j": loadImage("letter_j_PNG8.png"),
      "k": loadImage("letter_k_PNG19.png"),
      "l": loadImage("letter_l_PNG7.png"),
      "m": loadImage("letter_m_PNG4.png"),
      "n": loadImage("nShape.png"),
      "o": loadImage("letter_o_PNG56.png"),
      "p": loadImage("letter_p_PNG8.png"),
      "q": loadImage("letter_q_PNG13.png"),
      "r": loadImage("rShape.png"),
      "s": loadImage("letter_s_PNG2.png"),
      "t": loadImage("tShape.png"),
      "u": loadImage("uShape.png"),
      "v": loadImage("vShape.png"),
      "w": loadImage("wShape.png"),
      "x": loadImage("xShape.png"),
      "y": loadImage("yShape.png"),
      "z": loadImage("zShape.png"),
  
      
    };
    titleFont = loadFont("PixelifySans-Bold.ttf");
  }

class Grid {
  constructor(x, y, offset){
    this.x = x;
    this.y = y;
    this.offset = offset;
    this.letter = null;
  }

  display(){
    rect(this.x*gridX+this.offset[0], this.y*gridX+this.offset[1], gridX, gridX);
    if(this.letter !== null) {
      // Display the image at the same coordinates as the rect
      image(letters[this.letter], this.x*gridX+this.offset[0], this.y*gridX+this.offset[1], gridX, gridX);
    }
  }

  setLetter(letter) {
    this.letter = letter;
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
    super(x, y, [width/2-400, height/2 +230]);
  }
}

function keyTyped(){
    let chosenWord;
  
    if(key === "m" ){
      chosenWord = "m";
    }
    else if(key === "e"){
      chosenWord  = "e";
    }
    else if(key === "n"){
      chosenWord = "n";
    }
    else if(key === "a"){
      chosenWord = "a";
    }
    else if(key === "s"){
      chosenWord = "s";
    }
    for(let i = 0; i<14; i++){
      if(gridArray[i].letter === null){
        gridArray[i]. setLetter(chosenWord);
        return;
      }
    }
  }

function playGame(){
    if(gridArray[0] === "m" && gridArray[1] ==="a" && gridArray[2] === "n"||
      gridArray[0] === "m" && gridArray[1]==="e" && gridArray[2] === "n"||
      gridArray[0] === "s" && gridArray[1]==="e" && gridArray[2] === "a"&&
      gridArray[3] === "m" && gridArray[4]==="e" && gridArray[5] === "n"||
      gridArray[3] === "m" && gridArray[4]==="a" && gridArray[5] === "n"||
      gridArray[3] === "s" && gridArray[4]==="e" && gridArray[5] === "a"&&
      gridArray[6] === "m" && gridArray[7]==="e" && gridArray[8] === "n"||
      gridArray[6] === "m" && gridArray[7]==="a" && gridArray[8] === "n"||
      gridArray[6] === "s" && gridArray[7]==="e" && gridArray[8] === "a"&&
      gridArray[9] === "m" && gridArray[10]==="e" && gridArray[11] === "a"&& gridArray[12] ==="n" && gridArray[13]==="s")
      {
        return winGame();
      }
    else{
      return loseGame();
    }
  }