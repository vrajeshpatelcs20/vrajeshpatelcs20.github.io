// Grid Demo

let gridSize = 5;
let grid;
let clickSound;

function preload(){
  clickSound = loadSound("assets/bruh.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize, gridSize);
}
function draw() {
  background(255);
  displayGrid();
}
function mousePressed() {
  clickSound.play();

  let cellWidth = width / gridSize;
  let cellHeight = height / gridSize;

  let cellX = Math.floor(mouseX / cellWidth);
  let cellY = Math.floor(mouseY / cellHeight);

  if (grid[cellY][cellX] === 1) {
    grid[cellY][cellX] = 0;
    stroke(random(255), random(255), random(255));
  }
  else if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
    stroke(random(255), random(255), random(255));
  }
}
function displayGrid() {
  let cellWidth = width / gridSize;
  let cellHeight = height / gridSize;
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      // noStroke();
      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
}
function createEmpty2DArray(rows, cols) {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x = 0; x < cols; x++) {
      grid[y].push(0);
    }
  }
  return grid;
} function createRandom2DArray(rows, cols) {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 0) {
        grid[y].push(0);
      }
      else {
        grid[y].push(1);
      }
    }
  }
  return grid;
}