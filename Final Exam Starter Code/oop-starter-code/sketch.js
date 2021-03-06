// Ball OOP Starter Code
// 
// complete the following:
//  - create a global variable that starts as an empty array.
//  - in the setup() function, put 100 Ball objects into the array. 
//    The Balls should be created to show up at any random location.
//  -	during the draw() loop, iterate through the Ball array, 
//    moving and displaying each of the Ball objects.
//  - when the mouse is pressed, check to see if any Ball was clicked on. 
//    If it was, remove it from the array. You’ll want to use the 
//    checkIfPointInsideBall(x, y) function for this. 
//    Note that more than one Ball might be removed with a single click
//    (if they are overlapping).

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // make 100 ball classes
  for (let i = 0; i < 100; i++) {
    let oneBall = new Ball(random(0, width), random(0, height));
    ballArray.push(oneBall);
  }
}

function draw() {
  background("black");
  // go through the array
  for (let i = 0; i < ballArray.length; i++) {
    // show and move the ball
    ballArray[i].display();
    ballArray[i].move();
  }

}

function mousePressed() {
  // check if mouse was on ball
  for (let i = ballArray.length - 1; i > 0; i--) {
    if (ballArray[i].checkIfPointInsideBall(mouseX, mouseY)) {
      // remove that ball
      ballArray.splice(i, 1);
    }
  }
}

////////////////////////////////////////////////////////////
// you should not have to change anything below this line...
// though you might want to look through the Ball class to
// make sure you know how to call it's functions
////////////////////////////////////////////////////////////

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(30, 100);
    this.theColor = color(random(255), random(255), random(255), random(255));
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
  }

  display() {
    noStroke();
    fill(this.theColor);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    //check for edge bounce
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.dx *= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.dy *= -1;
    }
  }

  checkIfPointInsideBall(x, y) {
    let distanceFromCenter = dist(this.x, this.y, x, y);
    if (distanceFromCenter < this.radius) {
      //the given x, y value is inside this ball
      return true;
    }
    else {
      // the given x, y value is not inside this ball
      return false;
    }
  }
}