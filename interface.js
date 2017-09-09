$(document).ready(function(){
  var bowling = new Bowling;
  var score1 = new Score;


function updatescore(){
  score1.calculatingframe(0, false, 0, false);
  calculatingtotalscorewithbonus()
};

$('#currentscore').text("Your current score is" + score1.updatescore + " Ratpigeons");


function updatecoreafterroll(){
  $('#currentscore').attr('class', score1.calculatingtotalscorewithbonus())
};

$('#frame1').on('click', function() {
  $('#frame1').slideToggle(200);
  score.calculatingframe(10, false, 0, false);
  updatescore();
});

$('#currentscore').text('Your current score is' + score1.updatescore + " Ratpigeons")

// // search by attribute
// $('button[id="frame1"]')



// function frame1(){
// $('#roll1')
// }
});
