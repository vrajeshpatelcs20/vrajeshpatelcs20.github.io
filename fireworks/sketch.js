// Fireworks OOP Demo

let fireworks = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = fireworks.length - 1; i >= 0; i--) {
    if (fireworks[i].isDead()) {
      // kill it
      fireworks.splice(i, 1);

    }
    else {
      fireworks[i].move();
      fireworks[i].display();
    }
  }
}

function mousePressed() {
  angleMode(DEGREES);
  let numberOfFireworks = 100;
  let theta = 0;
  for (let i = 0; i < numberOfFireworks; i++) {
    let dx = cos(theta);
    let dy = sin(theta);

    let myParticle = new Particle(mouseX, mouseY, dx, dy);
    fireworks.push(myParticle);

    theta += (360 / numberOfFireworks);


  }
}

class Particle {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.size = random(3, 7);
    this.aplha = 255;
    this.R = random(255);
    this.G = random(255);
    this.B = random(255);
    this.theColor = color(this.R, this.G, this.B, this.aplha);
    this.dx = dx;  //random(-5, 5);
    this.dy = dy;  //random(-5, 5);
  }

  display() {
    noStroke();
    fill(this.theColor);
    circle(this.x, this.y, this.size);
  }
  move() {
    this.aplha--;
    this.theColor = color(this.R, this.G, this.B, this.aplha);
    this.x += this.dx;
    this.y += this.dy;
  }

  isDead() {
    return this.aplha === 0;
  }
}