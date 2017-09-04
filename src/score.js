
var Score = function(){
  this.totalscore = []
  this.strike = [];
  this.spare = {};
  this.frame = 1
};

// maybe don't need frame number? just a pattern of true and falses then compare this to score array
Score.prototype.hasstrike = function(bowlingstrike){
   this.strike.push(bowlingstrike)
      // frame = 1
    // if (bowlingstrike === true){
    //   (this.strike[frame])=true;
    // } else {
    //   this.strike[frame] = false;
    // }
    // nextframe = frame += 1
    // this.frame = {nextframe}
  };

scor = new Score
scor.hasstrike(true)
scor.hasstrike(false)
scor.strike


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
