/*
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
*/

// generativeBookmarks

// canvas sizing
const width = 117;
const height = 525;

// offsets for choosing the y values
const y_offset_upper = 10;
const y_offset_lower = 25;
const y_offset_window = 35;

// step variable for spacing lines
let step;

// offset for the right and left side of the canvas
let x_offset = 3;

function keyPressed(s){
  if (key === 's'){
    save('superSweetBookmarks.svg')
  }
}

function setup() {
  createCanvas(width, height, SVG);
  noLoop();
  // randomSeed(3);
}

function draw() {
  stroke(0); // make the lines black so they're easy to see
  strokeWeight(2);  // make them a little heavier

  // start just to the right of the canvas edge, draw lines, move to the right
  for (let x = x_offset; x < width-x_offset; x+= step) {

    // choose the upper y value
    let y1 = random(y_offset_upper, y_offset_window);

    //choose the lower y value
    let y2 = random(height/2, height-y_offset_lower);

    // draw the line
    line(x, y1, x, y2);

    // choose a random step value for horizontal spacing
    step = random(2,8);
  }


  // uncomment this to save the image
  // save('superSweetBookmarks.svg')
}