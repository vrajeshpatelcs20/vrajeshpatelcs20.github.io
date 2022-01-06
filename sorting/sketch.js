
// Bubble Sort Demo

let someList = [5, 15, 3, 8, 9, 1, 20, 7,1000,228,227,226,225,224,223,222,221,220,219,218,217,216,215,214,213,212,211,210,209,208,207,206,205,204,203,202,201,200,199,198,197,196,195,194,193,192,191,190,189,188,187,186,185,184,183,182,181,180,179,178,177,176,175,174,173,172,171,170,169,168,167,166,165,164,163,162,161,160,159,158,157,156,155,154,153,152,151,150,149,148,147,146,145,144,143,142,141,140,139,138,137,136,135,134,133,132,131,130,129,128,127,126,125,124,123,122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100];
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
