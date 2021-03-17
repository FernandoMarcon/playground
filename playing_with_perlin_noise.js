// var xoff = 0;
// var yoff = 50;
var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(51);
  
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for( var x = 0; x < width; x++) {
    stroke(255);
    // var y = random(height);
    var y = noise(xoff) * height;
    vertex(x, y);
    
    xoff += 0.02;
  }
  endShape();
  start += inc;
  // noLoop();
//   var x = map(noise(xoff), 0, 1, 0, width);
//   var y = map(noise(yoff), 0, 1, 0, height);
  
//   xoff += 0.01;
//   yoff += 0.01;
  
//   ellipse(x, y, 24, 24);
}
