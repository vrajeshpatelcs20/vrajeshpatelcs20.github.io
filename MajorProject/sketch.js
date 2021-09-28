// Major Project
// Vrajesh Patel 
// September 28/2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//  Global Variables and Arrays
let state = "grid";
let sizeOfSquare = 60;
let slot = "notHit";
let column = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function drawGrid() {
  for (let gridX = 0; gridX < sizeOfSquare * 10; gridX += sizeOfSquare) {
    for (let gridY = 0; gridY < sizeOfSquare * 10; gridY += sizeOfSquare) {
      if (slot === "notHit") {
        fill(255);
      }
      rect(gridX + sizeOfSquare, gridY + sizeOfSquare, sizeOfSquare, sizeOfSquare);
    }
  }
}
function drawNumber() {
  for (let i = 0; i < column.length; i++) {
    textSize(30);
    textAlign(CENTER);
    fill(0);
    text(column[i], 25, i * 60 + 100);

  }
}

function draw() {
  background("white");
  if (state === "grid") {
    drawNumber();
    drawGrid();
  }
}
