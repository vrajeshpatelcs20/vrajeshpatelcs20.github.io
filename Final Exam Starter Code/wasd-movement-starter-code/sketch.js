// I have included this code in order to help you get started.
// Feel free to use p5js.org/reference if you
// are having trouble with syntax

// complete the following:
//  - create global variables x and y, and have the mascot be displayed
//    at whatever location these variables are set to.
//  - the mascot should move up, left, down and right respectively 
//    when WASD is pressed.

let mascot;
let speed = 20;
let x;
let y;

function preload() {
  mascot = loadImage("assets/raptors-l.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;

}

function draw() {
  background(255);
  imageMode(CENTER);
  image(mascot, x, y);
}

function keyPressed() {
  if (key === "w") {
    y = y - speed;
  }
  if (key === "s") {
    y = y + speed;
  }
  if (key === "a") {
    x = x - speed;
  }
  if (key === "d") {
    x = x + speed;
  }
}