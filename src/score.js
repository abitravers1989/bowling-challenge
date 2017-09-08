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
     if (spare === true && strike === false) {
      this.hasspare(true);
      this.hasstrike(false);
    } else if (strike === true && spare === false) {
     this.hasstrike(true);
     this.hasspare(false);
    } else {
     this.hasstrike(false);
     this.hasspare(false);
    }
 };
