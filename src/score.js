
var Score = function(){
  this.totalscore = []
  this.framenr = 1
  this.strike = {};
  this.spare = {};
};

Score.prototype.hasstrike = function(bowlingstrike){
      console.log(bowlingstrike)
      frame = this.framenr
      console.log(frame)
    if (bowlingstrike === true){
      this.strike[frame] = true;
    } else {
      this.strike[frame] = false;
    }
  };

  Score.prototype.calculatingframe = function(roll1, strike, roll2, spare){
    score1 = roll1 + roll2
    console.log('running calculating with true')
    this.totalscore.push(score1)
    if (strike === true) {
      Score.prototype.hasstrike(true);
    } else {
      Score.prototype.hasstrike(false);
    }
  };


scor = new Score
scor.calculatingframe(10, true, 0, false);
scor.hasstrike(1, true)
