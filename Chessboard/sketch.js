// First Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let size;
let counter = true;

function setup() {
  if (windowHeight > windowWidth) {
    createCanvas(windowWidth, windowWidth);
  } else {
    createCanvas(windowHeight, windowHeight);
  }

  size = width / 8;
}

function colorGrid() {
  counter = !counter;
  if (counter === true) {
    fill(0);
  } else {
    fill(255);
  }
}

function displayGrid() {
  for (let x = 0; x < width; x += size) {
    colorGrid();

    for (let y = 0; y < height; y += size) {
      rect(x, y, size, size);
      colorGrid();
    }
  }
}

function draw() {
  background(255);
  displayGrid();
}
