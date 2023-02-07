function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  rect(windowWidth/2-95, windowHeight/2-115, 30, 100);
  rect(windowWidth/2-25, windowHeight/2-115, 30, 100);
  
  arc(windowWidth/2+95, windowHeight/2-65, 100, 100, 0.5 * PI, 1.5 * PI);
  arc(windowWidth/2-95, windowHeight/2+85, 100, 100, -0.5 * PI, -1.5 * PI);
  
  rect(windowWidth/2-5, windowHeight/2+35, 100, 20);
  rect(windowWidth/2-5, windowHeight/2+75, 100, 20);
  rect(windowWidth/2-5, windowHeight/2+115, 100, 20);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}