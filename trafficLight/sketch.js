// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis


let whichLight = "red";
let lastTimeSwitched = 0;
let redTime = 1000;
let greenTime = 1000;
let yellowTime = 400;



function setup() {
  createCanvas(100, 300);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  pickCorrectLights();
  colorCorrectLight();
}


function pickCorrectLights() {
  if (whichLight === "red" && millis() > lastTimeSwitched + redTime) {
    whichLight = "green";
    lastTimeSwitched = millis();
  }
  else if (whichLight === "green" && millis() > lastTimeSwitched + greenTime) {
    whichLight = "yellow";
    lastTimeSwitched = millis();
  }
  else if (whichLight === "yellow" && millis() > lastTimeSwitched + yellowTime) {
    whichLight = "red";
    lastTimeSwitched = millis();
  }


}


function colorCorrectLight() {
  if (whichLight === "green") {
    fill("green");
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
  else if (whichLight === "yellow") {
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //middle

  }
  else if (whichLight === "red") {
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //top

  }

}


function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}