var reset = true;

/* eyes */
var eyes = [];
var eyeNum = 100;
var eyeImg;

var instructionImg;
var trace; //mouse trace
var sequenceAnimation;

var whisper;
var whistle;

var w; // width of animation
var h; // height of animation

function preload() {
  eyeImg = loadImage("https://raw.githubusercontent.com/liubq7/Male-Gaze/master/assets/maleview/eye.gif");
  instructionImg = loadImage("https://raw.githubusercontent.com/liubq7/Male-Gaze/master/assets/maleview/Instruction.png");
  whisper = loadSound("../assets/maleview/whisper.mp3");
  whistle = loadSound("../assets/maleview/whistle.wav");
  sequenceAnimation = loadAnimation(
    "../assets/maleview/frames/1.png",
    "../assets/maleview/frames/36.png"
  );
}

function setup() {
  frameRate(15);
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(RGB, 255, 255, 255, 1);

  whisper.loop();
  whisper.setVolume(0.005);

  // Create Eyes
  for (i = 0; i < eyeNum; i++) {
    var x = random(width);
    var y = random(height);
    eyes[i] = new Eye(x, y);
  }

  trace = createGraphics(window.innerWidth, window.innerHeight);

  w = ((window.innerHeight - 100) * 730) / 1712;
  h = window.innerHeight - 100;
}

// Particle
// @avalibility: https://wow.techbrood.com/fiddle/33714
function Eye(x, y) {
  this.x = x;
  this.y = y;

  // Properties
  this.mass = random(5, 15);
  this.maxSpeed = random(12, 17);
  this.maxForce = random(1, 4);
  this.width = random(40, 60);

  // Motion
  this.pos = createVector(x, y);
  this.acc = createVector(0, 0);
  var initV = 30;
  this.vel = createVector(random(-initV, initV), random(-initV, initV));

  // External Forces
  this.applyForce = function (force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  };

  // Behaviors
  this.seek = function (target) {
    var desired = p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxSpeed);
    var steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxForce);
    this.applyForce(steering);
  };

  // Handle Updates
  this.update = function () {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  };

  // Draw
  this.display = function () {
    push();
    translate(this.pos.x, this.pos.y);
    imageMode(CENTER);
    image(eyeImg, this.mass, this.mass, this.width, this.width);
    pop();
  };
}

function gifControl() {
  if (
    mouseX > (window.innerWidth - w) / 2 &&
    mouseX < (window.innerWidth + w) / 2 &&
    mouseY > (window.innerHeight - h) / 2 - 30 &&
    mouseY < (window.innerHeight + h) / 2 - 30
  ) {
    sequenceAnimation.play();
  } else {
    sequenceAnimation.stop();
  }
}

function draw() {
  clear();

  animation(
    sequenceAnimation,
    window.innerWidth / 2,
    window.innerHeight / 2 - 30,
    w,
    h
  );
  sequenceAnimation.looping = false;
  sequenceAnimation.frameDelay = 6;
  gifControl();

  image(trace, 0, 0);
  trace.stroke(255, 39, 143, 80);
  trace.strokeWeight(12);
  trace.line(mouseX, mouseY, mouseX, mouseY);

  imageMode(CENTER);
  image(
    instructionImg,
    window.innerWidth / 2,
    (window.innerHeight + h) / 2 - 30,
    794,
    80
  );

  var target = createVector(mouseX, mouseY);
  for (i = 0; i < eyeNum; i++) {
    eyes[i].seek(target);
    eyes[i].display();
    eyes[i].update();
  }
}

function mousePressed() {
  whistle.play();
  whistle.setVolume(0.01);
}
