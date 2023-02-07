let value = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255);
  line(0, 400, windowWidth, 400);
  line(0, 425, windowWidth, 425);
  line(0, 450, windowWidth, 450);
  line(0, 475, windowWidth, 475);
  line(0, 500, windowWidth, 500);
  ellipse(value[0], value[1], value[2], value[3]);
}

function keyTyped() {
  if (key === 'e') {
    value = [100, 500, 20, 18];
  } else if (key === 'f') {
    value = [180, 488, 20, 18];
  } else if (key === "g") {
    value = [260, 476, 20, 18];
  } else if (key === "a") {
    value = [340, 464, 20, 18];
  } else if (key === "b") {
    value = [420, 452, 20, 18];
  } else if (key === "c") {
    value = [500, 440, 20, 18];
  } else {
    value = [580, 428, 20, 18];
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}