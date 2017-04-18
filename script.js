/* Concept: On click, produce a random note that will repeat at a set interval of a random length.
Click will also produce a random circle with a random size and random colour.
Sounds and circles should be able to overlap.
Bonus: Make notes semi random, so that they recreate popular progressions OR have doubleclick click produce four notes
Bonus: Provide an option for different kinds of sounds
Bonus: Have the circles shrink and grow based on its beat, peak size on beat, a dot when at half of beat*/


var canvas = document.getElementById('circle');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
    //drawing code here
} else {
  //canvas un-supported code here
}

canvas.getContext('2d');
