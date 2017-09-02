'use strict';

var Bowling = function(){
  this.framenr = 1
  this.rollnr = 1
  this.currentscore = 0
  this.totalscore = []
  this.pinsnr = 10
  this.strike = false
  this.bonus = 5
}

 var randomnumber = function() {
   return 8
  //  BOWLNUM = [1,2,3,4,5,6,7,8,9,10]
  //  BOWLNUM._sample
 };

  Bowling.prototype.gameframe = function(){
    // while this.framenr >= 10
      roll1();
      if (roll1(); < 10){
        roll2();
      } else {
        this.strike = true
        this.totalscore.push(10)
      }
    };

  Bowling.prototype.roll1 = function(){
    this.pinsnr -= randomnumber()
    this.currentscore += randomnumber()
  };

  Bowling.prototype.roll2 = function(){
    this.pinsnr -= randomnumber()
    this.currentscore += randomnumber()
  };




// bowl = new Bowling
// bowl.roll1();
// bowl.currentscore
