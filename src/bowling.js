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

 Bowling.prototype.roll1 = function(){
   this.pinsnr -= randomnumber()
   this.currentscore += randomnumber()
 };

 Bowling.prototype.roll2 = function(){
   this.pinsnr -= randomnumber()
   this.currentscore += randomnumber()
 };

  Bowling.prototype.gameframe = function(){
    // while this.framenr >= 10
      Bowling.prototype.roll1();
      console.log(Bowling.prototype.roll1())
      // returns 2 so the current score
      if (Bowling.prototype.roll1() >= 1){
        roll2();
      console.log(this.strike)
      console.log(this.totalscore)
      } else {
        this.strike = true
        this.totalscore.push(10)
        console.log(this.strike)
        console.log(this.totalscore)
      }
    };

bowl = new Bowling
bowl.roll1();
bowl.gameframe();
