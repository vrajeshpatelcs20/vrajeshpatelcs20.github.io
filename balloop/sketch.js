// Ball OOP Demo

let ballArray = [];
let faceImg;
let clickSouund;


function preload() {
  faceImg = loadImage("assets/face.png");
  clickSouund = loadSound("assets/bruh.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 0; i++) {
    let x = random(100, width - 100);
    let y = random(100, height - 100);
    let theBall = new Ball(x, y, faceImg);
    ballArray.push(theBall);
  }
}

function mousePressed() {
  for(let i = ballArray.length - 1; i >= 0; i--){
    if(ballArray[i].isPointInBall(mouseX,mouseY)){
      ballArray.splice(i,1);
    }
  }
}


function keyPressed(){
  if(key === " "){
    for (let i = 0; i < 1000; i++) {
      let theBall = new Ball(mouseX, mouseY, faceImg);
      ballArray.push(theBall);
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].move();
    ballArray[i].display();
  }

  // for (let theBall of ballArray) {
  //   theBall.move();
  //   theBall.display();
  // }
}

class Ball {
  constructor(x, y, theImage) {
    this.radius = random(50, 70);
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.theColor = color(random(255), random(255), random(255));
    this.theImage = theImage;
  }

  display() {
    // noStroke();
    // fill(this.theColor);
    // circle(this.x, this.y, this.radius * 2);
    imageMode(CENTER);
    image(this.theImage, this.x, this.y, this.radius * 2, this.radius * 2);
    // rect(this.x,this.y,this.radius,this.radius);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0 + this.radius || this.x > width - this.radius) {
      this.dx = -this.dx;
    }
    if (this.y < 0 + this.radius || this.y > height - this.radius) {
      this.dy = -this.dy;
    }
  }
  isPointInBall(x,y){
    if (dist(x,y,this.x,this.y) < this.radius){
      return true;
    }
    else{
      return false;
    }
  }


}