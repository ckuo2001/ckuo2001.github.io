var keyInput = 0;
let osc;
function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.amp(0.5);
}

function draw() {
  background(0);
  fill(255);
  text("keyboard c = C = Do", windowWidth/2-50, 200);
  text("keyboard d = D = Re", windowWidth/2-50, 230);
  text("keyboard e = E = Re", windowWidth/2-50, 260);
  text("keyboard f = F = Fa", windowWidth/2-50, 290);
  text("keyboard g = G = Sol", windowWidth/2-50, 320);
  text("keyboard a = A = La", windowWidth/2-50, 350);
  text("keyboard b = B = Si", windowWidth/2-50, 380);
}

function keyTyped() {
  if (key === 'a') {
    osc.freq(880);
  } else if (key === "b") {
    osc.freq(987.77);
  } else if (key === "c") {
    osc.freq(523.25);
  } else if (key === "d") {
    osc.freq(587.33);
  } else if (key === "e") {
    osc.freq(659.26);
  } else if (key === "f") {
    osc.freq(698.46);
  } else if (key === "g") {
    osc.freq(783.99);
  }
  osc.start();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}