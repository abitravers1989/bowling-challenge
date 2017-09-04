var Score = function(){
  this.totalscore = []
  this.strike = [];
  this.spare = [];
  // this.frame = 1
};

 Score.prototype.hasstrike = function(bowlingstrike){
   this.strike.push(bowlingstrike)
  };

  Score.prototype.hasspare = function(bowlingspare){
    this.spare.push(bowlingspare)
   };

  Score.prototype.calculatingframe = function(roll1, strike, roll2, spare){
    score1 = roll1 + roll2
    this.totalscore.push(score1)
    if (strike === true) {
      this.hasstrike(true);
    } else if (strike === false){
      this.hasstrike(false);
    } else if (spare === true) {
      this.hasspare(true);
    } else {
      this.hasspare(false);
    }

  };


scor = new Score
scor.calculatingframe(10, true, 0, false);
core.calculatingframe(2, false, 8, true);
