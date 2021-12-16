// Aquarium

let fish;
let pufferfishImg;

function preload() {
  pufferfishImg = loadImage("assets/fish.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fish = new Pufferfish(random(width), random(height), 500, pufferfishImg);
}

function draw() {
  background(0);
  fish.update();
  fish.display();
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
  }
  update(){
    
  }
  display() {
    image(this.myImage, this.x, this.y, this.size,this.size);
  }
}