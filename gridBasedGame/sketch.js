// Grid Based Game
// Vrajesh Patel
// Nov 8th 2021

let gridSize = 20;
let grid;
let water, sand, grass, wall, bot, end, level1, level2, level3, level4, levelSelect;
let playerX = 0;
let playerY = 0;
let playerSpeed, terrainChecker, blank;
let lastTimeSwitched = 0;
let theTime = 200;
let previousBlock = 1;
let blockNumber = 0;
let stateOfGame = "starterScreen";
let winState;

function preload() {
  grass = loadImage("assets/grass.jpg");
  water = loadImage("assets/water.jpg");
  sand = loadImage("assets/sand.jpg");
  wall = loadImage("assets/wall.png");
  bot = loadImage("assets/bot.png");
  end = loadImage("assets/end.png");
  level1 = loadJSON("assets/level1.json");
  level2 = loadJSON("assets/level2.json");
  level3 = loadJSON("assets/level3.json");
  level4 = loadJSON("assets/level4.json");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  stateChecker();
}
// check and displays what level your are on
function stateChecker() {
  if (stateOfGame === "starterScreen") {
    starterScreen();
  }
  else if (stateOfGame === levelSelect) {
    levelSelector(width / 5, height / 2, 100, 60);
  }
  if (stateOfGame === level1) {
    grid = level1;
    displayGrid();
  }
  if (stateOfGame === level2) {
    grid = level2;
    displayGrid();
  }
  if (stateOfGame === level3) {
    grid = level3;
    displayGrid();
  }
  if (stateOfGame === level4) {
    grid = level4;
    displayGrid();
  }
}

// The Start Screen
function starterScreen() {
  background(0, 255, 255);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2, 400, 100);
  textSize(100);
  textAlign(CENTER);
  text("Start", width / 2, height / 2 + 35);
  text("Water = 1x Sand = 2X Grass = 3X", width / 2, height / 2 + 200);
}
// Select Level
function levelSelector(width, height, widthOfBox, heightOfBox) {
  background(0, 255, 255);
  textSize(30);
  textAlign(CENTER);
  rect(width, height, widthOfBox, heightOfBox);
  text("Level 1", width, height + 10);
  rect(width * 2, height, widthOfBox, heightOfBox);
  text("Level 2", width * 2, height + 10);
  rect(width * 3, height, widthOfBox, heightOfBox);
  text("Level 3", width * 3, height + 10);
  rect(width * 4, height, widthOfBox, heightOfBox);
  text("Level 4", width * 4, height + 10);
  rectMode(CENTER);
}

function winner() {
  stateOfGame = blank;
  background(255);
  rect(width / 2, height / 2, 800, 100);
  text("You Won Press R to go to Level Selector", width / 2, height / 2);
  textSize(80);
  textAlign(CENTER);
}

function mousePressed() {
  if (stateOfGame === "starterScreen") {
    if (mouseX >= width / 2 - 200 && mouseX <= width / 2 + 200 && mouseY >= height / 2 - 50 && mouseY <= height / 2 + 50) {
      stateOfGame = levelSelect;
    }
  }

  if (stateOfGame === levelSelect) {
    if (mouseX >= width / 5 - 15 && mouseX <= width / 5 + 15 && mouseY >= height / 2 - 15 && mouseY <= height / 2 + 15) {
      stateOfGame = level1;
    }
    if (mouseX >= width / 5 * 2 - 15 && mouseX <= width / 5 * 2 + 15 && mouseY >= height / 2 - 15 && mouseY <= height / 2 + 15) {
      stateOfGame = level2;
    }
    if (mouseX >= width / 5 * 3 - 15 && mouseX <= width / 5 * 3 + 15 && mouseY >= height / 2 - 15 && mouseY <= height / 2 + 15) {
      stateOfGame = level3;
    }
    if (mouseX >= width / 5 * 4 - 15 && mouseX <= width / 5 * 4 + 15 && mouseY >= height / 2 - 15 && mouseY <= height / 2 + 15) {
      stateOfGame = level4;
    }
  }
}

function keyPressed() {
  if (key === "s") {
    if (millis() > lastTimeSwitched + theTime) {
      tryToMoveTo(playerX, playerY + 1);
      lastTimeSwitched = millis();
    }
  }
  if (key === "w") {
    if (millis() > lastTimeSwitched + theTime) {
      tryToMoveTo(playerX, playerY - 1);
      lastTimeSwitched = millis();
    }
  }
  if (key === "a") {
    if (millis() > lastTimeSwitched + theTime) {
      tryToMoveTo(playerX - 1, playerY);
      lastTimeSwitched = millis();
    }
  }
  if (key === "d") {
    if (millis() > lastTimeSwitched + theTime) {
      tryToMoveTo(playerX + 1, playerY);
      lastTimeSwitched = millis();
    }
  }
  if (key === "r") {
    stateOfGame = levelSelect;
  }
}

//  Moves the player/robot
function tryToMoveTo(newX, newY) {

  // checker for the time delay needed
  terrainChecker = grid[newY][newX];
  if (terrainChecker === 1) {
    theTime = 100;
  }
  else if (terrainChecker === 2) {
    theTime = 200;
  }
  else if (terrainChecker === 0) {
    theTime = 300;
  }
  if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize) {
    if (grid[newY][newX] === 0 || grid[newY][newX] === 1 || grid[newY][newX] === 2 || grid[newY][newX] === 20) {
      // reset current player spot to 0/empty  
      grid[playerY][playerX] = previousBlock;
      previousBlock = grid[newY][newX];
      playerX = newX;
      playerY = newY;
      grid[playerY][playerX] = 9;
    }
  }
}
//  displays the images where they need to be displayed
function displayGrid() {
  let cellWidth = width / gridSize;
  let cellHeight = height / gridSize;
  grid[playerY][playerX] = 9;
  grid[gridSize - 1][gridSize - 1] = 20;
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
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
      if (grid[y][x] === 20) {
        image(end, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
    }
  }
  // checks for win
  if (playerX === 19 && playerY === 19) {
    winner();
  }
}