// Bubble Demo
// Vrajesh Patel
// October 4th 2021

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}
function draw() {
  background(0);
  bubbleUp();
  displayBubble();

}
function bubbleUp() {
  for (let bubble of theBubbles) {
    bubble.y += bubble.dy;



    // // jitter sideways
    // bubble.x += random(-5, 5);
    bubble.x = noise(bubble.theTime) * width;
    bubble.theTime += 0.01;


  }

}
function displayBubble() {
  for (let bubble of theBubbles) {
    noStroke();
    fill(bubble.theColor);
    circle(bubble.x, bubble.y, bubble.radius * 2);

  }
}
function mousePressed() {
  for (let i = 1; i < 10; i++) {
    spawnBubble();

  }
}

function spawnBubble() {
  let bubble = {
    x: random(width),
    y: height,
    radius: random(10, 70),
    dx: 0,
    dy: -3,
    theColor: color(random(255), random(255), random(255)),
    // theTime: 100,
    theTime: random(1000),
  };
  theBubbles.push(bubble);

}