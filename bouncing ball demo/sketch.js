// Ball Array Demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function mousePressed() {
  for (let i = 0; i < 10; i++) {
    spawnBall();
  }
}
function draw() {
  background(0);
  for (let myBall of ballArray) {
    noStroke();
    fill(myBall.theColor);
    myBall.x = noise(myBall.time) * width;
    myBall.time += 0.0003;
    myBall.y = noise(myBall.time + 100) * height;
    circle(myBall.x, myBall.y, myBall.radius * 2);
  }
}
function spawnBall() {
  let myBall = {
    radius: random(10, 30),
    x: random(width),
    y: random(height),
    time: random(1000),
    theColor: color(random(255), random(255), random(255)),
  };
  ballArray.push(myBall);
}
