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
  background(0, 20);
  
  translate(width / 2, height / 2);

  let amplitude = width / 3;

  let x1 = sin(t / 10) * amplitude*0.1;
  let y1 = cos(t / 10) * amplitude*0.1;
  
  let x2 = sin(t / 20) * amplitude * 50;
  let y2 = cos(t / 10) * amplitude * 20;
  
  strokeWeight(0.5);
  noFill()
  stroke(200,100)
  ellipse(x1,y1, 15)
  
  strokeWeight(2);
  stroke(255);
  line(x1, y1, x2, y2);
  t += 0.5;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
