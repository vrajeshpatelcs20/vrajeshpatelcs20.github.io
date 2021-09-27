// First Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "grid";
let size = 50;
let slot = "notHit";

function setup() {
  createCanvas(size * 11, size * 11);
}
function drawGrid() {
  for (let gridX = 0; gridX < width; gridX += size) {
    for (let gridY = 0; gridY < height; gridY += size) {
      if (slot === "notHit") {
        fill(255);
      }
      rect(gridX + size, gridY + size, size, size);
    }
  }
}
function drawNumber() {
  for (number = 1; number <= 10; number++) {
    //     ADD STUFF HERE LATER
  }
}

function draw() {
  background("white");
  if (state === "grid") {
    drawNumber();
    drawGrid();
  }
}
