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
  
    if(key === "t" ){
      chosenWord = "t";
    }
    else if(key === "e"){
      chosenWord  = "e";
    }
    else if(key === "u"){
      chosenWord = "u";
    }
    else if(key === "o"){
      chosenWord = "o";
    }
    else if(key === "r"){
      chosenWord = "r";
    }
    for(let i = 0; i<14; i++){
      if(gridArray[i].letter === null){
        gridArray[i]. setLetter(chosenWord);
        return;
      }
    }
  }

function playGame(){
    if(gridArray[0] === "r" && gridArray[1] ==="o" && gridArray[2] === "t"||
      gridArray[0] === "t" && gridArray[1]==="o" && gridArray[2] === "e"||
      gridArray[0] === "o" && gridArray[1]==="u" && gridArray[2] === "t"&&
      gridArray[3] === "r" && gridArray[4]==="o" && gridArray[5] === "t"||
      gridArray[3] === "t" && gridArray[4]==="o" && gridArray[5] === "e"||
      gridArray[3] === "o" && gridArray[4]==="u" && gridArray[5] === "t"&&
      gridArray[6] === "r" && gridArray[7]==="o" && gridArray[8] === "t"||
      gridArray[6] === "t" && gridArray[7]==="o" && gridArray[8] === "e"||
      gridArray[6] === "o" && gridArray[7]==="u" && gridArray[8] === "t"&&
      gridArray[9] === "r" && gridArray[10]==="o" && gridArray[11] === "u"&& gridArray[12] ==="t" && gridArray[13]==="e")
      {
        return winGame();
      }
    else{
      return loseGame();
    }
  }