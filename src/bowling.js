'use strict';

var Bowling = function(){
  // this.framenr = 1
  this.currentscore = 0
  this.pinsnr = 10
// both currentscore and pinsnr needed??
  this.strike = false
  this.spare = false
  // this.score = new Score
}

 var randomnumber1 = function() {
   return Math.floor(Math.random() * 10) + 1
 };


 Bowling.prototype.roll1 = function(){
   rollnr = randomnumber1()
   this.currentscore += rollnr
   this.pinsnr -= rollnr
 };

 var randomnumber2 = function() {
   return Math.floor(Math.random() * 9) + 1
 };

 Bowling.prototype.roll2 = function(){
   rollnr2 = randomnumber2()
   console.log(rollnr2)
   if (rollnr2 > this.pinsnr) {
     rollnr3 = this.pinsnr
     this.spare = true
     this.score.push(10)
   } else {
     rollnr3 = rollnr2
   }
   this.pinsnr -= rollnr3
   this.currentscore += rollnr3
 };

  Bowling.prototype.gameframe = function(){
    // while this.framenr >= 10
      bowl1 = Bowling.prototype.roll1();
      if (bowl1 === 10){
        this.strike = true
        this.score.push(10)
      } else {
        // this.score.push(bowl1)
        Bowling.prototype.roll2();
      }
    };

bowl = new Bowling
bowl.gameframe();
