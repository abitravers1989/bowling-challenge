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

  Score.prototype.calcscore = function (){
    strikearray = [];
    this.strike.forEach(function(item, index) {
      if (item === true){
        strikearray.push(index)
      };
    });
    strikebonuscal = [];
    totscore = this.totalscore
    strikearray.forEach(function (item, index){
      indexnrofstrike = item + 1
      accessingnextscorevalue = totscore[indexnrofstrike]
      //  console.log(accessingnextscorevalue)
      strikebonuscal.push(accessingnextscorevalue)
      //  console.log(strikebonuscal)
     });
     console.log(strikebonuscal)
     strikebonuscal.forEach(function (item, index) {
     console.log(item)
     });
  };

 score = new Score
  score.calculatingframe(10, false, 0, false);
  score.calculatingframe(2, false, 8, true);
  score.calculatingframe(2, false, 3, false);
  score.calculatingframe(10, true, 0, false);
  score.calculatingframe(2, false, 8, true);
  score.calculatingframe(2, false, 3, false);
  score.calculatingframe(10, true, 0, false);
  score.calculatingframe(2, false, 8, true);
  score.calculatingframe(2, false, 3, false);
  score.calculatingframe(2, false, 8, true);
score.calcscore()
//
//   fruits[5] = 'mango';
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
// console.log(fruits.length); // 6
