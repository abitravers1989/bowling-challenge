src= "src/score.js"

$(document).ready(function(){
  var score1 = new Score();
  var strike1 = false
$('#currentscore').text("Your current score is " + score1.score + " Ratpigeons");

$('#framenr').text("You are on frame number " + score1.framenr + " of 10!")


function strikemessage(){
  $('#currentscore').text("BOOOOOM You got a strike! Please wait till the next round to see how many extra Ratpigeons you recieved");
  strike1 = true
};

function updatescore(){
  $('#currentscore').text("Your Score is now: " + score1.score + " Ratpigeons");
};

function updateframenr(){
  score1.framenr += 1
  $('#framenr').text("You are on frame number " + score1.framenr + " of 10!");
};


$('#ball1s').on( 'click', function(){
  score1.calculatingframe(2, false, 3, false);
  score1.calculatingtotalscorewithbonus();
  updatescore();
});

$('#ball1a').on( 'click', function(){
  if (framenr === 1 && score1.score === 0){
  score1.calculatingframe(10, true, 0, false);
  score1.calculatingtotalscorewithbonus();
  strikemessage();
  updatescore();
} else {
  window.alert("That is just greedy ...You have already rolled your first ball of this frame... You can't have all the fun. Please roll Ball 2 instead!")
}

 });


$('#ball1s').on( 'click', function(){
   if (strike1 === flase){
     score1.calculatingframe(2, false, 3, false);
     score1.calculatingtotalscorewithbonus();
     updatescore();
     updateframenr();
   } else {
       window.alert("First ball was a strike please move onto frame 2")
   };
});


// // search by attribute
// $('button[id="frame1"]')

});
