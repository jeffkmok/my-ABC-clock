let lastMinute = -1;

function setup() {
  createCanvas(363, 396);
  noStroke();
}

function draw() {
  background(0); // Black
  let h = hour() % 12;
  let m = minute();
  let s = second();

  drawHours(h);
  drawMinutes(m);
  drawSeconds(s);
}

function drawHours(hours) {
  fill(255, 0, 0);
  for (let i = 0; i < hours; i++) {
    rect(0, 396 - (i + 1) * 33, 27, 27);
  }
}

function drawMinutes(minutes) {
  fill(255);
  for (let i = 0; i < minutes; i++) {
    let x = 36 + (i % 5) * 33;
    let y = 396 - 33 * (floor(i / 5) + 1);
    rect(x, y, 27, 27);
  }
}

function drawSeconds(seconds) {
  fill(0, 0, 255);
  for (let i = 0; i < seconds; i++) {
    let x = 205 + (i % 5) * 33;
    let y = 396 - 33 * (floor(i / 5) + 1);
    rect(x, y, 27, 27);
  }
}
