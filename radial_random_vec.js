function setup() {
  createCanvas(400,400);
  background(0);
}

function draw() {
  translate(width/2, height/2);
  
  v = p5.Vector.random2D();
  v.mult(random(25,150));
  
  strokeWeight(4);
  stroke(255,50);
  line(0,0,v.x,v.y)
}
