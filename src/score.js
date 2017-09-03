
var Score = function(){
  this.totalscore = []
  this.framenr = 1
};

  Score.prototype.calculatingframe = function(roll1, strike, roll2, spare){
    score1 = roll1 + roll2
    this.totalscore.push(score1)
  };
