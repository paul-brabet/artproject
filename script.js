/* Concept: On click, produce a random note that will repeat at a set interval of a random length.
Click will also produce a random circle with a random size and random colour.
Sounds and circles should be able to overlap.
Bonus: Make notes semi random, so that they recreate popular progressions OR have doubleclick click produce four notes
Bonus: Provide an option for different kinds of sounds
Bonus: Have the circles shrink and grow based on its beat, peak size on beat, a dot when at half of beat*/

var canvas = document.getElementById('c');
var width = canvas.width;
var height = canvas.height;

/* DISABLED BECAUSE IT DOESN'T SEEM TO WORK
//  Obtain mouse location
function getClickPosition(e) {
  var xPos = e.clientX;
  var yPos = e.clientY;
};
canvas.addEventListener('click', getClickPosition, true);
*/

var context = canvas.getContext('2d');

// Draw circle function
var draw = function () {
  // Create random colour
  var red = Math.floor(Math.random() * 256)
  var green = Math.floor(Math.random() * 256)
  var blue = Math.floor(Math.random() * 256)
  // Create randomn radius
  var circleRadius = Math.random() * 100;
  // Create random location
  var xPos = Math.floor(Math.random() * width);
  var yPos = Math.floor(Math.random() * height);
  // Draw circle
  context.arc(xPos, yPos, circleRadius, 0, 2 * Math.PI);
  context.lineWidth=1;
  context.stroke();
  context.fillStyle = 'rgba(' + red + ', ' + green + ', ' + blue + ', 0.5)';
  context.fill()

};

document.getElementById('button').addEventListener('click', function() {
  // Making the canvas equal itself resets/redraws the entire canvas
  canvas.width = canvas.width;
  canvas.height = canvas.height;
  },
true);

// draw();
setInterval(draw, 200);
// canvas.addEventListener('click', draw, false);
