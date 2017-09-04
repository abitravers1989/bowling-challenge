
var Score = function(){
  this.totalscore = []
  this.framenr = 1
  this.strike = {};
  this.spare = {};
};

Score.prototype.hasstrike = function(bowlingstrike){
      frame = 1
      console.log(bowlingstrike)
      console.log(frame)
    if (bowlingstrike === true){
      (this.strike[frame])=true;
    } else {
      this.strike[frame] = false;
    }
    frame += 1
    console.log(frame)
  };

scor = new Score
scor.hasstrike(true)

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
