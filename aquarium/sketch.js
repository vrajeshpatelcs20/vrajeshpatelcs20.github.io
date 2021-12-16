// Aquarium

let fish, octopus;
let pufferfishImg, octopusImg;
let theCreatures = [];

function preload() {
  pufferfishImg = loadImage("assets/fish.png");
  octopusImg = loadImage("assets/octopus.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 50; i++) {
    if (random(100) < 30) {
      let octopus = new Octopus(random(width), random(height), 50, octopusImg);
      theCreatures.push(octopus);
    }
    else {
      let fish = new Pufferfish(random(width), random(height), 50, pufferfishImg);
      theCreatures.push(fish);
    }
  }

}

function draw() {
  background(255);
  for (let someCreature of theCreatures) {
    someCreature.update();
    someCreature.display();
  }
}

class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  update() {
    this.x += 4;
    this.y += sin(this.x / 200);

    if (this.x > width) {
      this.x = 0;
    }
  }
  display() {
    fill("green");
    circle(this.x, this.y, this.size);
  }
}


class Pufferfish extends Creature {
  constructor(x, y, size, theImage) {
    super(x, y, size);
    this.myImage = theImage;
    this.yTime = 1000;
  }
  update() {
    this.x += 2;
    this.y = noise(this.yTime) * height;
    this.yTime += random(0.001, 0.005);

    if (this.x > width) {
      this.x = 0;
    }
  }

  display() {
    image(this.myImage, this.x, this.y, this.size, this.size);
  }
}

class Octopus extends Creature {
  constructor(x, y, size, someImage) {
    super(x, y, size);
    this.image = someImage;
  }
  display() {
    image(this.image, this.x, this.y, this.size, this.size);
  }
}