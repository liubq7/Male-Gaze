var reset = true;
var count = 0;
var streams = [];
var streamHeight = 30;
var sentences = [
  "Why do women let go of bodies. Find a gym or call Jenny Craig. Gross",
  "OMG, such a fat pig",
  "She has a prosthetic leg, and just flirting with everyone",
  "You get fat these days",
  "You dress is so short, you shouldn't wear it",
  "Why you're even building a career",
  "What did your husband think about this",
];
var interval;
var loopLength;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  interval = sentences[0].length * 25 + 30;
  loopLength = interval * (sentences.length - 1);

  var y = 0;
  for (var i = 0; i <= height / streamHeight; i++) {
    var stream = new Stream();
    stream.generateComments(random(-2000, 2000), y);
    streams.push(stream);
    y += streamHeight;
  }

  textFont("Courier Prime");
  textStyle(BOLD);
  textSize(25);
}

function Comment(x, y, speed, col, opacity) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.col = col;
  this.opacity = opacity;

  this.setComment = function () {
    this.value = sentences[count % sentences.length];
    count = count + 1;
  };

  this.move = function () {
    this.x = this.x >= width ? -loopLength : (this.x += this.speed);
  };
}

function Stream() {
  this.comments = [];
  this.speed = random(1, 4);

  this.generateComments = function (x, y) {
    var opacity = random(40, 50);
    var col = round(random(0, 4));
    for (var i = 0; i < sentences.length - 1; i++) {
      comment = new Comment(x, y, this.speed, col, opacity);
      comment.setComment();
      this.comments.push(comment);
      x -= interval;
    }
  };

  this.render = function () {
    this.comments.forEach(function (comment) {
      switch(comment.col) {
        case 0:
          fill(134, 50, 50, comment.opacity);
          break;
        case 1:
          fill(230, 112, 112, comment.opacity);
          break;
        case 2:
          fill(112, 11, 104, comment.opacity);
          break;
        case 3:
          fill(92, 79, 79, comment.opacity);
          break;
      }
      text(comment.value, comment.x, comment.y);
      comment.move();
    });
  };
}


function draw() {
  background(254, 242, 220, 400);

  streams.forEach(function (stream) {
    stream.render();
  });
}
