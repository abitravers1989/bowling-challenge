$( document ).ready(function(){
  var bowling = new Bowling
  var score = new Score

function updatescore(){
$('#currentscore').text('Your current score is' + score.calculatingtotalscorewithbonus(); + " Ratpigeons")
}

function updatecoreafterroll(){
  $('#currentscore').attr('class', score.calculatingtotalscorewithbonus())
}

$('#frame1').on( 'click', function() {
  score.calculatingframe(10, false, 0, false);
  calculatingtotalscorewithbonus();
})


// function frame1(){
// $('#roll1')
// }
};
