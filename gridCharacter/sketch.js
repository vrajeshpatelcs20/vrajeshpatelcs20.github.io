// Game of Life

let grid;
let gridSize = 20;
let cellWidth, cellHeight;
let level1;
let playerX = 0;
let playerY = 0;
function preload() {
  level1 = loadJSON("assets/level1.json"); //assumes gridsize = 20
}
function setup() {
  createCanvas(windowWidth * 0.8, windowHeight * 0.8);
  grid = level1;
  cellWidth = (width - 1) / gridSize;
  cellHeight = (height - 1) / gridSize;
  // put player in grid
  grid[playerY][playerX] = 9;
}
function draw() {
  background(220);
  displayGrid();
}
function keyPressed() {
  if (key === "e") {
    grid = createEmpty2DArray(gridSize, gridSize);
  }
  if (key === "r") {
    grid = createRandom2DArray(gridSize, gridSize);
    stroke(random(255), random(255), random(255));
  }
  if (key === "s") {
    tryToMoveTo(playerX, playerY + 1);
  }
  else if (key === "w") {
    tryToMoveTo(playerX, playerY - 1);
  }
  else if (key === "a") {
    tryToMoveTo(playerX - 1, playerY);
  }
  else if (key === "d") {
    tryToMoveTo(playerX + 1, playerY);
  }
}
              
function mousePressed() {
  let cellX = Math.floor(mouseX / cellWidth);
  let cellY = Math.floor(mouseY / cellHeight);

  if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
  }
  else if (grid[cellY][cellX] === 1) {
    grid[cellY][cellX] = 0;
  }
}
function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1) {
        fill("black");
      }
      if (grid[y][x] === 9) {
        fill(200, 0, 255);
      }
      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
}
function createEmpty2DArray(rows, cols) {
  let board = [];
  for (let y = 0; y < rows; y++) {
    board.push([]);
    for (let x = 0; x < cols; x++) {
      board[y].push(0);
    }
  }
  return board;
}
function createRandom2DArray(rows, cols) {
  let board = [];
  for (let y = 0; y < rows; y++) {
    board.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        board[y].push(0);
      }
      else {
        board[y].push(1);
      }
    }
  }
  return board;
}