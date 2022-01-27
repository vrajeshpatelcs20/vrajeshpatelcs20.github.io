// complete the following function
// color the grid according to the following rules:
// 1 - red
// 2 - blue
// 3 - green
// 4 - black
// 5 - white
// the size of each cell is already calculated in setup, and
//   is stored in the cellSize variable
// the 2d array containing the numbers is called grid

function displayGrid(grid) {

}


////////////////////////////////////////////////////////////
// you should not have to change anything below this line...
////////////////////////////////////////////////////////////

let rows = 10;
let cols = 10;
let grid;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = height / rows;
  grid = [
    [5,4,3,2,1,2,3,4,5,1],
    [4,3,2,1,2,3,4,5,1,2],
    [3,2,1,2,3,4,5,1,2,3],
    [2,1,2,3,4,5,1,2,3,4],
    [1,2,3,4,5,1,2,3,4,5],
    [2,3,4,5,1,2,3,4,5,1],
    [3,4,5,1,2,3,4,5,1,2],
    [4,5,1,2,3,4,5,1,2,3],
    [5,1,2,3,4,5,1,2,3,4],
    [1,2,3,4,5,1,2,3,4,5]
  ];
}

function draw() {
  background(255);
  displayGrid(grid);
}
