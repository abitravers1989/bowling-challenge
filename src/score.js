var Score = function(){
  this.totalscore = []
  this.strike = [];
  this.spare = [];
  this.strikearray = [];
  this.positionofbonusonscorearray = [];
  this.bonusscorearray = [];
  this.totalbonusscore = [];
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
     });

     this.positionofbonusonscorearray = positionofbonusonscorearray

   };


  Score.prototype.calcbonusscore3 = function () {
     this.calcbonusscore2();
     totalscorearray = this.totalscore
     positionofbonusonscorearray = this.positionofbonusonscorearray
     bonusscorearray = [];
     positionofbonusonscorearray.forEach(function (item, index){
       bonusscorearray.push(totalscorearray[item])
     });
     this.bonusscorearray = bonusscorearray
  };

  Score.prototype.calcbonusscore4 = function () {
    this.calcbonusscore3();
    bonusscorearray = this.bonusscorearray
    // console.log(bonusscorearray)
    count = 0
    bonusscorearray.forEach(function (item, index){
      count += item
    });
    this.totalbonusscore = count
    // return this.totalbonusscore
  }

  Score.prototype.calculatingtotalscore = function () {
    this.calcbonusscore4();
    totalscore = this.totalscore
    count = 0
    totalscore.forEach(function (item, index){
      count += item
    });
    this.totalscore = count
    return this.totalscore
  };

  Score.prototype.calculatingtotalscorewithbonus = function () {
    this.calculatingtotalscore();
    scorefinal = (this.totalscore) + (this.totalbonusscore)
    return scorefinal
  }

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
   score.calculatingtotalscorewithbonus();
