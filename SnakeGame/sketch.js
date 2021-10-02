// First Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



// global variables
let numSegments = 5;
let direction = 'right';



// stater cordinates and spacer
let xStart = 0;
let yStart = 250;
let spaceBetweenCircles = 10;

let snakeXCordinate = [];
let snakeYCordinate = [];

let appleXCordinate = 0;
let appleYCordinate = 0;
let scoreElem;

function setup() {
  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');

  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  stroke(255); // change color from here
  strokeWeight(10);
  updateappleCoordinates();

  for (let i = 0; i < numSegments; i++) {
    snakeXCordinate.push(xStart + i * spaceBetweenCircles);
    snakeYCordinate.push(yStart);
  }
}


// update/change the direction of the snake
function updateSnakeCoordinates() {
  for (let i = 0; i < numSegments - 1; i++) {
    snakeXCordinate[i] = snakeXCordinate[i + 1];
    snakeYCordinate[i] = snakeYCordinate[i + 1];
  }
  if (direction === "right") {
    snakeXCordinate[numSegments - 1] = snakeXCordinate[numSegments - 2] + spaceBetweenCircles;
    snakeYCordinate[numSegments - 1] = snakeYCordinate[numSegments - 2];
  }

  if (direction === "up") {
    snakeXCordinate[numSegments - 1] = snakeXCordinate[numSegments - 2];
    snakeYCordinate[numSegments - 1] = snakeYCordinate[numSegments - 2] - spaceBetweenCircles;
  }
  if (direction === "left") {
    snakeXCordinate[numSegments - 1] = snakeXCordinate[numSegments - 2] - spaceBetweenCircles;
    snakeYCordinate[numSegments - 1] = snakeYCordinate[numSegments - 2];

  }
  if (direction === "down") {

    snakeXCordinate[numSegments - 1] = snakeXCordinate[numSegments - 2];
    snakeYCordinate[numSegments - 1] = snakeYCordinate[numSegments - 2] + spaceBetweenCircles;

  }
}

// check to see if snake is out of bounds or not
function checkGameStatus() {
  if (
    snakeXCordinate[snakeXCordinate.length - 1] > width ||
    snakeXCordinate[snakeXCordinate.length - 1] < 0 ||
    snakeYCordinate[snakeYCordinate.length - 1] > height ||
    snakeYCordinate[snakeYCordinate.length - 1] < 0 ||
    checkSnakeCollision()
  ) {
    noLoop();
    let scoreVal = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Game ended! Your score was : ' + scoreVal);
  }
}

// checker to see if the snake hits the snake
function checkSnakeCollision() {
  let snakeHeadX = snakeXCordinate[snakeXCordinate.length - 1];
  let snakeHeadY = snakeYCordinate[snakeYCordinate.length - 1];
  for (let i = 0; i < snakeXCordinate.length - 1; i++) {
    if (snakeXCordinate[i] === snakeHeadX && snakeYCordinate[i] === snakeHeadY) {
      return true;
    }
  }
}

// checker to see if the apple is consumed or not
function checkForapple() {
  point(appleXCordinate, appleYCordinate);
  if (snakeXCordinate[snakeXCordinate.length - 1] === appleXCordinate && snakeYCordinate[snakeYCordinate.length - 1] === appleYCordinate) {
    let prevScore = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Score = ' + (prevScore + 1));
    snakeXCordinate.unshift(snakeXCordinate[0]);
    snakeYCordinate.unshift(snakeYCordinate[0]);
    numSegments++;
    updateappleCoordinates();
  }
}
// place a new apple
function updateappleCoordinates() {
  appleXCordinate = floor(random(10, (width - 100) / 10)) * 10;
  appleYCordinate = floor(random(10, (height - 100) / 10)) * 10;
}
// keyboard functions
function keyPressed() {
  switch (keyCode) {
    case 65:
      if (direction !== 'right') {
        direction = 'left';
      }
      break;
    case 68:
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
    case 87:
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case 83:
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
  }
}

// main
function draw() {
  background(0);
  for (let i = 0; i < numSegments - 1; i++) {
    line(snakeXCordinate[i], snakeYCordinate[i], snakeXCordinate[i + 1], snakeYCordinate[i + 1]);
  }
  updateSnakeCoordinates();
  checkGameStatus();
  checkForapple();
}
