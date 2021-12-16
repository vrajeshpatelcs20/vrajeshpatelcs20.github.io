// Aquarium

let fish, octopus;
let pufferfishImg, octopusImg;
let numberOfRects;
let rectHeights = [];

function preload() {
  pufferfishImg = loadImage("assets/fish.png");
  octopusImg = loadImage("assets/octopus.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = width;
  fish = new Pufferfish(random(width), random(height), 50, pufferfishImg);
  octopus = new Octopus(100,200,100,octopusImg);

}

function draw() {
  background(255);
  fish.update();
  fish.generateTerrain();
  fish.display();
  octopus.update();
  octopus.display();
}

class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  update() {
    this.x += 4;
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
  generateTerrain() {
    let time = 0;
    for (let i = 0; i < numberOfRects; i++) {
      let theHeight = noise(time) * height;
      rectHeights.push(theHeight);
      time += 0.001;
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