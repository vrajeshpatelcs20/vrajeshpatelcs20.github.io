// First Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 0;
let y = 0;
let size = 100;
let speed = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  rect(x, y, size, size);
  fill(255, 0, 255);

  if (y <= 0) {
    x += size / speed;
  }
  if (x >= width - size) {
    y += size / speed;
  }
  if (y >= height - size) {
    x -= size / speed;
  }
  if (x <= 0) {
    y -= size / speed;
  }
}
