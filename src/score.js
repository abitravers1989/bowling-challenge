
var Score = function(){
  this.totalscore = []
  this.framenr = 1
  this.strike = {};
  this.spare = {};
  // this.strikebonus = 10
};


// framenr = this.framenr
Score.prototype.hasstrike = function(framenum, bowlingstrike){
    if (bowlingstrike === true){
      this.strike[framenum] = true;
    } else {
      this.strike[framenum] = false;
    }
  };

  Score.prototype.calculatingframe = function(roll1, strike, roll2, spare){
    score1 = roll1 + roll2
    this.totalscore.push(score1)
  };


scor = new Score
scor.hasstrike(1, true)
