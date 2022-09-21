/* 
Moire patterns of interlocking curves
moved by some noise parametters creating
a damascuss fog look alike.
Layer and layer stacked uppon each other is what creates the effect.
by @Arquiaz_ RodrigoDE
*/

let sp = 16
// let dens = 1/150 // 150 to 700
// let vl = 300 // 50 to 400, at 50 intervals


let cs0 = ["#fbf8cc","#fde4cf","#ffcfd2","#f1c0e8","#cfbaf0","#a3c4f3","#90dbf4","#8eecf5","#98f5e1","#b9fbc0"] // ## Background pastel colors
let cs1 = ["#06837f","#02cecb","#b4ffff","#fed811","#fdc100"] // ## Yellow ## Maskin Layer, the fill of shapes
let cs2 = ["#004b23","#006400","#007200","#008000","#38b000","#70e000","#9ef01a","#ccff33"] // ## Green ## First grid horizontal, still
let cs3 = ["#2d00f7","#6a00f4","#8900f2","#a100f2","#b100e8","#bc00dd","#d100d1","#db00b6","#e500a4","#f20089"] // ## Purple ## Second Noise grid horizontal
let cs4 = ["#75dddd","#84c7d0","#9297c4","#9368b7","#aa3e98"]
let cs5 = ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"]
let denss = [1/150, 1/200, 1/250, 1/300, 1/350, 1/400, 1/450, 1/500, 1/550, 1/600, 1/650, 1/700]
let vll = [50,100,150,200,250,300,350,400]
let col, dens, vl, resolution

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1)

  seeding() // FXHASH seed random
  features() // FXHASH random features generation
  // FX Features
  window.$fxhashFeatures = {
    "Density" : dens,
    "Velocity" : vl,
    "Resolution": resolution,
  }
}


function features() {
  c0 = random(cs0)
  c1 = random(cs1)
  c2 = random(cs2)
  c3 = random(cs3)
  c4 = random(cs4)
  c5 = random(cs5)
  dens = random(denss)
  console.log("Density", dens)
  vl = random(vll)
  console.log("Velocity",vl)
  if (random()<0.2){ 
    sp = 8;
    resolution = "High"
  } else {
    sp = 16;
    resolution = "Normal"
  }
  console.log("Resolution =", resolution,":", sp)
}

function seeding(){
  seed = int(fxrand() * 100000000)
  randomSeed(seed)
  noiseSeed(seed)
}


function draw() {
  background(c0)

  //Masking Layer
  l1 = color(c1)
  l1.setAlpha(90)
  fill(l1)
  // noFill()

  // ## 1st Grid Horizontal
  stroke(c2)
  strokeWeight(8)
  lineGrid(sp)

  // ## Pt Grid
  strokeWeight(20)
  stroke(c2)
  ptGrid(sp)

  // ## 2nd Noise Grid Horizontal
  // stroke(255,2,255)
  stroke(c3)
  strokeWeight(6)
  noiseGrid(sp,width,height,vl/2,dens,50,true)
  
  // ## 3rd Noise Grid Horizontal
  stroke(c4)
  strokeWeight(3)
  noiseGrid(sp,width,height,vl,dens,50,true)

  // ## Frame
  // stroke(0,255,255)
  stroke(c5)
  strokeWeight(32)
  rect(0,0,width,height)

}

function ptGrid(sp){
  for (let x = -sp; x < height + sp; x += sp) {
    for(let y = -sp; y < width + sp; y += sp){
      point(y,x)
    }
  }
}

function lineGrid(sp){
  for (let x = -sp; x < height + sp; x += sp) {
    beginShape()
    for(let y = -sp; y < width + sp; y += sp){
      curveVertex(y,x)
    }
    endShape()
  }
}

function noiseGrid(sp,width,height,speed,dens,scale,bool){
  for (let x = -sp; x < height + sp; x += sp) {
    let inc = x
    beginShape()
    for(let y = -sp; y < width + sp; y += sp){
      let move = map(inc+frameCount/speed,0,10,-4,6)
      let nxa = noise(x*dens,y*dens,move) * scale
      let radi = floor(nxa * scale) 
      if (bool){
        curveVertex(y,x+nxa) // nxa
      }else { curveVertex(y,x+radi)}
      
      }
    endShape()
  }

}