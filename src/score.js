var Score = function(){
  this.totalscore = []
  this.strike = [];
  this.spare = [];
  this.strikearray = [];
  this.positionofbonusonscorearray = [];
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

  Score.prototype.calcbonusscore1 = function (){
    strikearray = this.strikearray
    this.strike.forEach(function(item, index) {
      if (item === true){
        strikearray.push(index)
      }
    });
    this.strikearray = strikearray
  };

   Score.prototype.calcbonusscore2 = function () {
     this.calcbonusscore1();
    //  console.log(this.strikearray)
     strikearray = this.strikearray
     totalscorearray = this.totalscore
     positionofbonusonscorearray = [];
     strikearray.forEach(function (item){
       positionofbonusonscorearray.push(item +1)
       this.positionofbonusonscorearray = positionofbonusonscorearray
      //  console.log(this.positionofbonusonscorearray)
     });
   };



  // Score.prototype.calcstrikebonus = function (){
  //   this.calcscore();
  //   console.log(this.calcscore())
  //   strikebonuscal = [];
  //   totscore = this.totalscore
  //   strikearray = this.strikearray
  //
  //   strikearray.forEach(function (item, index){
  //     indexnrofstrike = item + 1
  //     accessingnextscorevalue = totscore[indexnrofstrike]
  //     //  console.log(accessingnextscorevalue)
  //     strikebonuscal.push(accessingnextscorevalue)
  //     //  console.log(strikebonuscal)
  //    });
  //
  //    console.log(strikebonuscal)
  //    strikebonuscal.forEach(function (item) {
  //    console.log(item)
  //     //  strikebonuscal.getSum(item, 0)
  //    });
  // };
  //
  // Score.prototype.getSum = function (total, num){
  //   return total + num
  // };


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
  score.calcbonusscore2()
//
//   fruits[5] = 'mango';
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
// console.log(fruits.length); // 6
