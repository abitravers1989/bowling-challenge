
var Score = function(){
  this.totalscore = []
  this.strike = [];
  this.spare = {};
  // this.frame = 1
};

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

  Score.prototype.calculatingframe = function(roll1, strike, roll2, spare){
    score1 = roll1 + roll2
    this.totalscore.push(score1)
    if (strike === true) {
      console.log('1')
      this.hasstrike(true);
      console.log('2')
    } else {
      this.hasstrike(false);
      console.log('3')
    }
    console.log('4')
  };


scor = new Score
scor.calculatingframe(10, true, 0, false);
