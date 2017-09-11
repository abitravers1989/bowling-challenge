src= "src/score.js"

$(document).ready(function(){
  var score1 = new Score();
  var strike1 = false
$('#currentscore').text("Your current score is " + score1.score + " Ratpigeons");

$('#framenr').text("You are on frame number " + score1.framenr + " of 10!")


function strikemessage(){
  window.alert(" BOOOOOM YESSSSSSSSIR !!!!!   You got a strike!  LEG END ")
  $('#currentscore').text("Please wait till the next round to see how many extra Ratpigeons you earnt");
  strike1 = true
};

function updatescore(){
  $('#currentscore').text("Your Score is now: " + score1.score + " Ratpigeons");
};

function updateframenr(){
  $('#framenr').text("You are on frame number " + score1.framenr + " of 10!");
  score1.framenr += 1
};


$('#frame1option1').on( 'click', function(){
  score1.calculatingframe(2, false, 3, false);
  score1.calculatingtotalscorewithbonus();
  updatescore();
  updateframenr();
});

$('#frame1option2').on( 'click', function(){
  if (score1.score != 0 ) {
    window.alert("You have already thrown your first ball, please throw second!")
  }
  score1.calculatingframe(10, true, 3, false);
  score1.calculatingtotalscorewithbonus();
  strikemessage();
  updateframenr();

});
//
// $('#frame2option1').on( 'click', function(){
//   score1.calculatingframe(2, false, 3, false);
//   score1.calculatingtotalscorewithbonus();
//   updatescore();
//   updateframenr();
// });



// if (strike1 === true) {
//   score1.calculatingframe(2, false, 3, false);
//   score1.calculatingtotalscorewithbonus();
//   updatescore();
//   updateframenr();
// } else {
//   score1.calculatingframe(7, false, 3, false);
//   score1.calculatingtotalscorewithbonus();
//   updatescore();
//   updateframenr();
// }
});
