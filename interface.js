$(document).ready(function(){
  var bowling = new Bowling;
  var score = new Score;

  $('#currentscore').text('Your current score is' + score.updatescore() + " Ratpigeons")
  }

function updatescore(){
  calculatingtotalscorewithbonus();
};

function updatecoreafterroll(){
  $('#currentscore').attr('class', score.calculatingtotalscorewithbonus())
}

$('#frame1').on( 'click', function() {
  score.calculatingframe(10, false, 0, false);
  updatescore();
})


// function frame1(){
// $('#roll1')
// }
};
