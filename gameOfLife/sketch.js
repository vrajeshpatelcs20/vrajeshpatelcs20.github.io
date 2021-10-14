// Game Of Life



let grid;
let gridSize = 20;




function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = create2DArray(gridSize, gridSize);
}

function draw() {
  background(255, 0, 255);
}



function create2DArray(row, cols) {
  for (let y = 0; y < gridSize; y++) {
    grid.push([]);
    for (let x = 0; x < gridSize; x++) {
      grid.push();

    }
  }
}