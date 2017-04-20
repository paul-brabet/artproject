var canvas = document.getElementById('c');
var width = canvas.width;
var height = canvas.height;
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

/*Activate the below for fully automatic painting*/
setInterval(draw, 500);
/*Activate the below for prompted automatic painting*/
// canvas.addEventListener('click', draw, false);
