// OOP Walker Demo

let kayaan, nick, hannah;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  kayaan = new Walker(width / 2, height / 2, "red");
  nick = new Walker(100, height / 2, "blue");
  hannah = new Walker(400,500,"pink");
}
function draw() {
  // background(255,0,255);
  kayaan.move();
  nick.move();
  hannah.move();
  kayaan.display();
  nick.display();
  hannah.display();
}
class Walker {
  constructor(x, y, theColor) {
    this.x = x;
    this.y = y;
    this.color = theColor;
    this.radius = 3;
    this.speed = this.radius*2;
  }
  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius);
  }
  move() {
    let choice = random(100);
    if (choice < 25) {//up
      this.y -= this.speed;
    }
    else if (choice < 50) {//down
      this.y += this.speed;
    }
    else if (choice < 75) {//left
      this.x -= this.speed;
    }
    else {//right
      this.x += this.speed;
    }
  }
}