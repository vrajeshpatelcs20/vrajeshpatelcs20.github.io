// Circle Recursion

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  recursiveCircle(width / 2, height);
}

function recursiveCircle(x, diameter) {
  circle(x, height / 2, diameter);
  fill(diameter);
  stroke(255);
  if (diameter > 10) {
    recursiveCircle(x - 0.25 * diameter, diameter / 2);
    recursiveCircle(x + 0.25 * diameter, diameter / 2);
  }

}