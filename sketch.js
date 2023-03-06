//CYW 5 Example 2

/*
Based on Alexander Miller’s video on Recreating Vintage Computer Art with Processing and inspired by John Whitney's work:
https://www.youtube.com/watch?v=LaarVR1AOvs&t=181s
*/

let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(255, 240, 220, 40);
  background(255)
  
  translate(width / 2, height / 2);

  let amplitude = width / 3;

  let x1 = sin(t / 10) * amplitude*0.1;
  let y1 = cos(t / 20) * amplitude*0.1;
  
  let x2 = sin(t / 20) * amplitude * 50;
  let y2 = cos(t / 10) * amplitude * 20;

  strokeWeight(5)
  noFill()
  stroke(255, 150, 150, 200)
  point(x1*10, y1*10)
  point(-x1*10, y1*10)
  point(x1*10, -y1*10)
  point(-x1*10, -y1*10)

  point(x2*0.01, y1*10)
  point(-x2*0.01, y1*10)
  point(x2*0.01, -y1*10)
  point(-x2*0.01, -y1*10)

  point(x1*10, y2*0.01)
  point(-x1*10, y2*0.01)
  point(x1*10, -y2*0.01)
  point(-x1*10, -y2*0.01)

  point(x2*0.01, y2*0.01)
  point(-x2*0.01, y2*0.01)
  point(x2*0.01, -y2*0.01)
  point(-x2*0.01, -y2*0.01)

  point(y1*10, x1*10)
  point(-y1*10, -x1*10)
  point(y1*10, x2*0.01)
  point(-y1*10, -x2*0.01)
  point(y2*0.01, x1*10)
  point(-y2*0.01, -x1*10)
  point(y2*0.01, x2*0.01)
  point(-y2*0.01, -x2*0.01)

  rotate(t*0.5)
  
  strokeWeight(2);
  stroke(255, 200, 0, 200);
  line(x1, y1, x2*0.005, y2*0.005);
  t += 0.4;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
