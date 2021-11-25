// click Local Storage
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let clickCount = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  textSize(42);
  text(clickCount, width/2,height/2);
  fill("red");
  text(getItem("highestClick"),100,100);

}

function mousePressed(){
  clickCount++;
  if(clickCount > getItem("highestClick")){
    storeItem("highestClick",clickCount);
  }
}
