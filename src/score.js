
var Score = function(){
  this.totalscore = []
  this.strike = [];
  this.spare = {};
  this.frame = 1
};

// maybe don't need frame number? just a pattern of true and falses then compare this to score array
Score.prototype.hasstrike = function(bowlingstrike){
      frame = 1
      console.log(bowlingstrike)
      console.log(frame)
    if (bowlingstrike === true){
      (this.strike[frame])=true;
    } else {
      this.strike[frame] = false;
    }
    nextframe = frame += 1
    this.frame = {nextframe}
    console.log(frame)
    // when called multiple times it only puts first pair in strike so this
    // isn't a hash
    console.log(this.strike)
  };

scor = new Score
scor.hasstrike(true)
scor.hasstrike(false)
scor.strike
scor.frame

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
