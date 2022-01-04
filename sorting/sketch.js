
// Bubble Sort Demo

let someList = [5, 15, 3, 8, 9, 1, 20, 7];
let theTruth = false;

function bubbleSort(aList) {
  while (!theTruth) {
    theTruth = true; 
    for (let i = 0; i < aList.length - 1; i++) {
      if (aList[i] > aList[i + 1]) {
        let theOne = aList[i + 1];
        aList[i + 1] = aList[i];
        aList[i] = theOne;
        theTruth = false;
      }
    }
    console.log(aList);
  }
  return aList;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // console.log(bubbleSort(someList));
}

function draw() {
  background(0);
}
