var t1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  t1 = PI;
}

function draw() {
  background(0);
  translate(width/2, height/2); 
  scale(1, -1);
  ellipse(cos(t1)*300, sin(t1)*cos(t1)*300, 50);
  t1+=0.05;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}