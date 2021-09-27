let lastTimeSwitched = 0;
let isRed = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (isRed) {
    background("red");
  } else {
    background("black");
  }

  if (millis() > lastTimeSwitched + 2000) {
    lastTimeSwitched = millis();
    isRed = !isRed;
  }
  console.log(millis());
}
