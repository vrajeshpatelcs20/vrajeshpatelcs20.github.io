// Grid Demo

let gridSize = 20;
let grid;
let water, sand, grass, wall, bot;
let playerX = 0;
let playerY = 0;
let previousBlock = 1;
let blockNumber = 0;
let stateOfGame = starterScreen



function preload() {
  grass = loadImage("assets/grass.jpg");
  water = loadImage("assets/water.jpg");
  sand = loadImage("assets/sand.jpg");
  wall = loadImage("assets/wall.png");
  bot = loadImage("assets/bot.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = create2DArray(gridSize, gridSize);
  grid[playerY][playerX] = 9;

}
// 0 = white
function draw() {
  background(255);
  displayGrid();
}

function keyPressed() {
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
  if (key === "e"){
    blockNumber = 0;
  }
  if (key === "r"){
    blockNumber = 2;
  }
  if (key === "t"){
    blockNumber = 3;
  }
  if (key === "y"){
    blockNumber = 1;
  }
}


function mousePressed() {
  let cellWidth = width / gridSize;
  let cellHeight = height / gridSize;
  let cellX = Math.floor(mouseX / cellWidth);
  let cellY = Math.floor(mouseY / cellHeight);
  swap(cellX, cellY);
}


function tryToMoveTo(newX, newY) {
  if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize) {
    if (grid[newY][newX] === 0 || grid[newY][newX] === 1 || grid[newY][newX] === 2) {
      // reset current player spot to 0/empty  
      grid[playerY][playerX] = previousBlock;
      previousBlock = grid[newY][newX];
      playerX = newX;
      playerY = newY;
      grid[playerY][playerX] = 9;
    }
  }
}

function swap(x, y) {
  if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
    if (grid[y][x] === 0 || grid[y][x] === 1 || grid[y][x] === 2 || grid[y][x] === 3) {
      grid[y][x] = blockNumber;
      // stroke(random(255), random(255), random(255));
    }
    // else if (grid[y][x] === 1) {
    //   grid[y][x] = 2;
    //   // stroke(random(255), random(255), random(255));
    // }
    // else if (grid[y][x] === 2) {
    //   grid[y][x] = 3;
    //   // stroke(random(255), random(255), random(255));
    // }
    // else if (grid[y][x] === 3) {
    //   grid[y][x] = 0;
    //   // stroke(random(255), random(255), random(255));
    // }
  }
}

function displayGrid() {
  let cellWidth = width / gridSize;
  let cellHeight = height / gridSize;
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      rect(width - cellWidth, height - cellHeight, cellWidth, cellHeight);
      fill("white");
      noStroke();
      if (grid[y][x] === 0) {
        image(water, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        image(grass, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 2) {
        image(sand, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 3) {
        image(wall, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 9) {
        image(bot, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
      // noStroke();
      // rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
  // rect(0, 0, cellWidth, cellHeight);
  
}
function create2DArray(rows, cols) {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x = 0; x < cols; x++) {
      grid[y].push(1);
    }
  }
  return grid;
}


