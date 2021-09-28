// Rotation Demo
// Vrajesh Patel
// September 28/2021


let x,y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  x = 0;
  y = height;
}

function draw(){

  background(255);

  translate(x, y);
  let theta = atan2(mouseY - y, mouseX - x);
  rotate(theta);
  fill("black");
  rectMode(CENTER);
  rect(0, 0, 200 ,50 );

}
