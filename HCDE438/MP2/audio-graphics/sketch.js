var keyInput = 0;
let osc;
let length = [0, 0, 0, 0, 0, 0, 0, 0];
function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.amp(0.5);
}

function draw() {
  background(255);
  
  //piano outlook
  rect(windowWidth/2-320, windowHeight-200, 640, 150);
  line(windowWidth/2, windowHeight-200, windowWidth/2, windowHeight-50);
  line(windowWidth/2-160, windowHeight-200, windowWidth/2-160, windowHeight-50);
  line(windowWidth/2+160, windowHeight-200, windowWidth/2+160, windowHeight-50);
  line(windowWidth/2-80, windowHeight-200, windowWidth/2-80, windowHeight-50);
  line(windowWidth/2+80, windowHeight-200, windowWidth/2+80, windowHeight-50);
  line(windowWidth/2+240, windowHeight-200, windowWidth/2+240, windowHeight-50);
  line(windowWidth/2-240, windowHeight-200, windowWidth/2-240, windowHeight-50);
  
  //piano key
  textSize(32);
  text("A", windowWidth/2-291, windowHeight-100);
  text("S", windowWidth/2-211, windowHeight-100);
  text("D", windowWidth/2-131, windowHeight-100);
  text("F", windowWidth/2-51, windowHeight-100);
  text("J", windowWidth/2+29, windowHeight-100);
  text("K", windowWidth/2+109, windowHeight-100);
  text("L", windowWidth/2+189, windowHeight-100);
  text(";", windowWidth/2+269, windowHeight-100);
  
  //graphics
  rect(windowWidth/2-320, windowHeight-250-length[0], 80, 10);
  rect(windowWidth/2-240, windowHeight-250-length[1], 80, 10);
  rect(windowWidth/2-160, windowHeight-250-length[2], 80, 10);
  rect(windowWidth/2-80, windowHeight-250-length[3], 80, 10);
  rect(windowWidth/2, windowHeight-250-length[4], 80, 10);
  rect(windowWidth/2+80, windowHeight-250-length[5], 80, 10);
  rect(windowWidth/2+160, windowHeight-250-length[6], 80, 10);
  rect(windowWidth/2+240, windowHeight-250-length[7], 80, 10);
}

function keyTyped() {
  if (key === 'a') {
    osc.freq(523.25);
    length[0]+=10;
  } else if (key === "s") {
    osc.freq(587.33);
    length[1]+=10;
  } else if (key === "d") {
    osc.freq(659.26);
    length[2]+=10;
  } else if (key === "f") {
    osc.freq(698.46);
    length[3]+=10;
  } else if (key === "j") {
    osc.freq(783.99);
    length[4]+=10;
  } else if (key === "k") {
    osc.freq(880);
    length[5]+=10;
  } else if (key === "l") {
    osc.freq(987.77);
    length[6]+=10;
  } else if (key === ";") {
    osc.freq(1046.50);
    length[7]+=10;
  }
  osc.start();
}

function keyReleased() {
  osc.stop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}