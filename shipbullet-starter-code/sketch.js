// OOP Pair Programming Starter Code
// George and Vrajesh


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;
let speed = 5;
let bulletSpeed = 5;
let bullet = [];

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage, speed, 60, 20, bulletSpeed);
}

function draw() {
  background(0);
  enterprise.update();
  enterprise.display();
  bullet.update();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage, speed, width, height) {
    // define the variables needed for this ship
    this.x = x;
    this.y = y;
    this.theWidth = width;
    this.theHeight = height;
    this.ship = theImage;
    this.dx = speed;
    this.dy = speed;
    this.image = theImage;
    this.direction;

  }


  update() {
    if (this.direction === "up") { // up
      this.y -= this.dy;
    }
    if (this.direction === "down") { // down
      this.y += this.dx;
    }
    if (this.direction === "right") { // right
      this.x += this.dx;
    }
    if (this.direction === "left") {  // left
      this.x -= this.dx;
    }

  }

  display() {
    // show the ship
    image(this.image, this.x, this.y, this.theWidth, this.height);
  }

  handleKeyPress() {
    if (keyIsDown(87)) {
      this.direction = "up";
      enterprise.update(this.direction);
    }

    if (keyIsDown(83)) {
      this.direction = "down";
      enterprise.update(this.direction);
    }

    if (keyIsDown(68)) {
      this.direction = "right";
      enterprise.update(this.direction);
    }

    if (keyIsDown(65)) {
      this.direction = "left";
      enterprise.update(this.direction);
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
  constructor(x, y, dx, dy, theImage, bulletSpeed) {
    // define the variables needed for the bullet here
    this.x = x;
    this.y = y;
    this.dy = bulletSpeed;
    this.image = theImage;
    this.bulletSpeed = bulletSpeed;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    this.y += this.dy;
  }

  display() {
    // show the bullet
    bullet.push(image(this.image, this.x, this.y, this.theWidth, this.height));
  }

  isOnScreen() {
    // check if the bullet is still on the screen
  }
}

function mousePressed() {
  bullet.display();
}

