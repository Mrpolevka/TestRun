let vtx = []
let rpx,rpy
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw() {
  stroke(255)
  noFill()
  beginShape()
  for (let i = 0; i < 6; i++) {
    rpx = random(0,windowWidth)
    rpy = random(0,windowHeight)
    curveVertex(rpx,rpy)    
    // vtx.push(rp,rp)
  }
  endShape()
}
