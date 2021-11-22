// Do not edit the code between these comments. 
// You should only edit the class Bubble below.
// -----------------------------------------------
let myBubble;

function setup() {
  createCanvas(400, 400);
  myBubble = new Bubble(width / 2, height);
}

function draw() {
  background(220);
  myBubble.up();
  myBubble.display();
}
// -----------------------------------------------


class Bubble {
  // Your code should go here!
  // Make the class work as described in the quiz question...
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 6;
    this.dy = 2;
    this.theColor = "red";
  }
  display() {
    circle(this.x, this.y, this.radius);
    fill(this.theColor);
  }
  up() {
    this.y += this.dy;
  }
}





// Add code to use the class as described in the quiz question.
let theBullet;

function setup() {
  createCanvas(400, 400);
  theBullet = new Bullet();
}

function draw() {
  background(220);
  theBullet.display();
  theBullet.update();
}

function mousePressed() {
  theBullet.fire(mouseX,mouseY)
}

// Do not edit the code beneath this comment. 
// -----------------------------------------------

class Bullet {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.angle = 0;
    this.speed = 3;
    this.rectWidth = 15;
    this.rectHeight = 2;
    this.color = "red";
  }
  
  fire(targetX, targetY) {
    this.x = width/2;
    this.y = height/2;
    this.angle = atan2(targetY-height/2, targetX-width/2);
  }
  
  update() {
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;
  }
  
  display() {
    fill(this.color);
    noStroke();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(0, 0, this.rectWidth, this.rectHeight);
  }
}