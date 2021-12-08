/* eslint-disable indent */
// Sierpinksi Triangle Demo


let triangleVertices1 = [
  { x: 1000, y: 100 },
  { x: 700, y: 700 },
  { x: 400, y: 100 },
];

let triangleVertices = [
  { x: 1000, y: 100 },
  { x: 700, y: 700 },
  { x: 1300, y: 700 },
];
let triangleVertices2 = [
  { x: 400, y: 100 },
  { x: 700, y: 700 },
  { x: 100, y: 700 },
];


let counter = 1;
let counter2 = 1;
let theColors = ["red","purple","blue", "black","pink", "violet","white", "yellow"];


function mousePressed(){
  if(counter < 6 ){
    counter++;
    counter2++;
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  sierpinksi(triangleVertices, counter);
  sierpinksi(triangleVertices1, counter2);
  sierpinksi(triangleVertices2, counter2);
}


function sierpinksi(points, degree) {
  stroke(255,0,255);
  fill(theColors[degree]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
  if (degree > 0) {
    sierpinksi([points[0],
    getMidpoint(points[0], points[1]),
    getMidpoint(points[0], points[2])],
      degree - 1);

    sierpinksi([points[1],
    getMidpoint(points[0], points[1]),
    getMidpoint(points[1], points[2])],
      degree - 1);

    sierpinksi([points[2],
    getMidpoint(points[0], points[2]),
    getMidpoint(points[1], points[2])],
      degree - 1);

  }

}


function getMidpoint(point1, point2) {
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let midpoint = { x: xDiff / 2, y: yDiff / 2 };
  return midpoint;
}