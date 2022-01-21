// Grid Based Game
// Vrajesh Patel
// Nov 8th 2021

let gridSize = 20;
let grid;
let water, sand, grass, wall, bot, end, level1, level2, level3, level4, level5, level6, level7, level8;
let levelSelect;
let playerX = 0;
let playerY = 0;
let playerSpeed, terrainChecker, blank;
let counter;
let lastTimeSwitched = 0;
let theTime = 200;
let previousBlock = 1;
let blockNumber = 0;
let stateOfGame = "starterScreen";
let winState;
let winStateForBoxes = false;

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
  level5 = loadJSON("assets/level5.json");
  level6 = loadJSON("assets/level6.json");
  level7 = loadJSON("assets/level7.json");
  level8 = loadJSON("assets/level8.json");
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
  if (stateOfGame === blank) {
    background(255);
  }
  if (stateOfGame === "starterScreen") {
    starterScreen();
  }
  else if (stateOfGame === levelSelect) {
    levelSelector(width / 5, height / 3, 100, 60);
  }
  if (stateOfGame === level1) {
    grid = level1;
    displayGridWorld();
  }
  if (stateOfGame === level2) {
    grid = level2;
    displayGridWorld();
  }
  if (stateOfGame === level3) {
    grid = level3;
    displayGridWorld();
  }
  if (stateOfGame === level4) {
    grid = level4;
    displayGridWorld();
  }
  if (stateOfGame === level5) {
    grid = level5;
    displayGridBoxes();
  }
  if (stateOfGame === level6) {
    grid = level6;
    displayGridBoxes();
  }
  if (stateOfGame === level7) {
    grid = level7;
    displayGridBoxes();
  }
  if (stateOfGame === level8) {
    grid = level8;
    displayGridBoxes();
  }
}

// The Starting Screen
function starterScreen() {
  background(0, 255, 255);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2, 400, 100);
  textAlign(CENTER);
  textSize(width / 13);
  text("Welcome To The Game", width / 2, 125);
  textSize(width / 20);
  text("Start", width / 2, height / 2 + 35);
  text("Water = 1x        Sand = 2X        Grass = 3X", width / 2, height / 2 + 200);
  textSize(width / 40);
  text("For Levels 1-4 Try To Get The Robot From The Top Left To The Bottom Right/Endzone", width / 2, height / 5 + 75);
  text("For Levels 5-8 Try To Get All The Square To Be White Levels 5-8 Will Be Much Harder", width / 2, height / 4 + 125);
  textSize(width / 60);
  // text("Made By Mad#49", width / 2, height - 40);
}


// Select Level Screen
function levelSelector(width, height, widthOfBox, heightOfBox) {
  background(0, 255, 255);
  textSize(width / 15);
  textAlign(CENTER);

  rect(width, height, widthOfBox, heightOfBox);
  text("Level 1", width, height + 10);

  rect(width * 2, height, widthOfBox, heightOfBox);
  text("Level 2", width * 2, height + 10);

  rect(width * 3, height, widthOfBox, heightOfBox);
  text("Level 3", width * 3, height + 10);

  rect(width * 4, height, widthOfBox, heightOfBox);
  text("Level 4", width * 4, height + 10);

  rect(width, height * 2, widthOfBox, heightOfBox);
  text("Level 5", width, height * 2 + 10);

  rect(width * 2, height * 2, widthOfBox, heightOfBox);
  text("Level 6", width * 2, height * 2 + 10);

  rect(width * 3, height * 2, widthOfBox, heightOfBox);
  text("Level 7", width * 3, height * 2 + 10);

  rect(width * 4, height * 2, widthOfBox, heightOfBox);
  text("Level 8", width * 4, height * 2 + 10);

  rectMode(CENTER);
}
// The Winner Screen
function winner() {
  background(255);
  text("You Won Press R to go to Level Selector", width / 2, height / 2);
  textSize(width / 20);
  textAlign(CENTER);
}
// Mouse Pressed and make sure when it should apply or in which level it should work
function mousePressed() {
  if (stateOfGame === "starterScreen") {
    if (mouseX >= width / 2 - 200 && mouseX <= width / 2 + 200 && mouseY >= height / 2 - 50 && mouseY <= height / 2 + 50) {
      stateOfGame = levelSelect;
    }
  }

  if (stateOfGame === levelSelect) {
    if (mouseX >= width / 5 - 15 && mouseX <= width / 5 + 15 && mouseY >= height / 3 - 15 && mouseY <= height / 3 + 15) {
      stateOfGame = level1;
    }
    if (mouseX >= width / 5 * 2 - 15 && mouseX <= width / 5 * 2 + 15 && mouseY >= height / 3 - 15 && mouseY <= height / 3 + 15) {
      stateOfGame = level2;
    }
    if (mouseX >= width / 5 * 3 - 15 && mouseX <= width / 5 * 3 + 15 && mouseY >= height / 3 - 15 && mouseY <= height / 3 + 15) {
      stateOfGame = level3;
    }
    if (mouseX >= width / 5 * 4 - 15 && mouseX <= width / 5 * 4 + 15 && mouseY >= height / 3 - 15 && mouseY <= height / 3 + 15) {
      stateOfGame = level4;
    }
    if (mouseX >= width / 5 - 15 && mouseX <= width / 5 + 15 && mouseY >= height / 3 * 2 - 15 && mouseY <= height / 3 * 2 + 15) {
      stateOfGame = level5;
    }
    if (mouseX >= width / 5 * 2 - 15 && mouseX <= width / 5 * 2 + 15 && mouseY >= height / 3 * 2 - 15 && mouseY <= height / 3 * 2 + 15) {
      stateOfGame = level6;
    }
    if (mouseX >= width / 5 * 3 - 15 && mouseX <= width / 5 * 3 + 15 && mouseY >= height / 3 * 2 - 15 && mouseY <= height / 3 * 2 + 15) {
      stateOfGame = level7;
    }
    if (mouseX >= width / 5 * 4 - 15 && mouseX <= width / 5 * 4 + 15 && mouseY >= height / 3 * 2 - 15 && mouseY <= height / 3 * 2 + 15) {
      stateOfGame = level8;
    }
  }
  if (stateOfGame === level5) {
    let cellWidth = width / gridSize;
    let cellHeight = height / gridSize;
    let cellX = Math.floor(mouseX / cellWidth);
    let cellY = Math.floor(mouseY / cellHeight);

    swap(cellX, cellY);
  }
  if (stateOfGame === level6) {
    let cellWidth = width / gridSize;
    let cellHeight = height / gridSize;
    let cellX = Math.floor(mouseX / cellWidth);
    let cellY = Math.floor(mouseY / cellHeight);

    swap(cellX, cellY);
    swap(cellX + 1, cellY);
    swap(cellX - 1, cellY);
  }
  if (stateOfGame === level7) {
    let cellWidth = width / gridSize;
    let cellHeight = height / gridSize;
    let cellX = Math.floor(mouseX / cellWidth);
    let cellY = Math.floor(mouseY / cellHeight);

    swap(cellX, cellY);
    swap(cellX, cellY + 1);
    swap(cellX, cellY - 1);
  }
  if (stateOfGame === level8) {
    let cellWidth = width / gridSize;
    let cellHeight = height / gridSize;
    let cellX = Math.floor(mouseX / cellWidth);
    let cellY = Math.floor(mouseY / cellHeight);

    swap(cellX, cellY);
    swap(cellX + 1, cellY);
    swap(cellX - 1, cellY);
    swap(cellX, cellY + 1);
    swap(cellX, cellY - 1);
  }

}
// Key Pressed to find out which way the bot moves and to add the delay
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
    theTime = 200;
  }
  else if (terrainChecker === 2) {
    theTime = 400;
  }
  else if (terrainChecker === 0) {
    theTime = 600;
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
function displayGridWorld() {
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
    stateOfGame === blank;
    winner();
  }
}
// display the grid boxes
function displayGridBoxes() {
  counter = 0;
  let cellWidth = width / gridSize;
  let cellHeight = height / gridSize;
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        counter++;
        fill("black");
      }
      stroke(0);
      rectMode(CORNER);
      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
  if (counter === 0) {
    stateOfGame === blank;
    winner();
  }
}
// swaps black to white and vice versa
function swap(x, y) {
  if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
    if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
    else if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
  }
}