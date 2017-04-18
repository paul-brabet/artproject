/* Concept: On click, produce a random note that will repeat at a set interval of a random length.
Click will also produce a random circle with a random size and random colour.
Sounds and circles should be able to overlap.
Bonus: Make notes semi random, so that they recreate popular progressions OR have doubleclick click produce four notes
Bonus: Provide an option for different kinds of sounds
Bonus: Have the circles shrink and grow based on its beat, peak size on beat, a dot when at half of beat*/

var width = canvas.width;
var height = canvas.height;

var red = Math.floor(Math.random() * 256)
var green = Math.floor(Math.random() * 256)
var blue = Math.floor(Math.random() * 256)

var xPos = Math.random() * width;
var yPos = Math.random() * width;
var circleRadius = Math.random() * 50;

function draw () {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var circle = canvas.getContext('2d');
    //drawing code here
    circle.arc(xPos, yPos, circleRadius, 0, 2 * Math.PI);
    circle.fillStyle = 'rgba(' + red + ', ' + green + ', ' + blue + ', 0.5)';
    circle.fill()
  };
};

draw();


//    ctx.moveTo(Math.random * width, Math.random * height);
