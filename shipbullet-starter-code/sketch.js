// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;
let speed = 5;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage);
}

function draw() {
  background(0);
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  if(key === "w"){
    enterprise.handleKeyPress("up");
  }

  if(key === "s"){
    enterprise.handleKeyPress("down");
  }

  if(key === "d"){
    enterprise.handleKeyPress("right");
  }

  if(key === "a"){
    enterprise.handleKeyPress("left");
  }
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage, speed) {
    // define the variables needed for this ship
    this.x = x;
    this.y = y;
    this.ship = theImage;
    this.dx = speed;
    this.dy = speed;

  }

  update() {

  }

  display() {
    // show the ship
    
  }

  handleKeyPress(direction) {
    if (direction === "up") { // up
      this.y -= this.dy;
    }

    if (direction === "down") { // down
      this.y += this.dx;
    }
    if (direction === "right") { // right
      this.x += this.dx;
    }
    if (direction === "left") {  // left
      this.x -= this.dx;
    }
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
  }

  display() {
    // show the bullet
  }

  isOnScreen() {
    // check if the bullet is still on the screen
  }
}

