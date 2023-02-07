const stickers =[];
const colors =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  const recCount = 10;
  for(let i = 0; i < recCount; i++) {
    randomStickers();
    randomColor();
  }
}

function draw() {
  background(0);
  
  //Laptop
  fill(255);
  rect(40, 90, 700, 400, 30);
  
  //Apple
  noStroke();
  fill(0);
  circle(400, 300, 80)
  noStroke();
  rotate(radians(-40));
  fill(0);
  ellipse(150, 450, 25, 10);
  fill(255);
  rotate(radians(40));
  circle(440, 303, 40);
  
  for(let i = 0; i < stickers.length; i++) {
    fill(colors[i]);
    rect(stickers[i][0], stickers[i][1], stickers[i][2], stickers[i][3]);
  }
}

function randomStickers() {
  let oneSticker = [Math.floor(random(60, 550)), Math.floor(random(150, 350)), Math.floor(random(10, 150)), Math.floor(random(10, 150))];
  stickers.push(oneSticker);
}

function randomColor() {
  let oneColor = [Math.floor(random(255)), Math.floor(random(255)), Math.floor(random(255))];
  colors.push(oneColor);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}