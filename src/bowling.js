'use strict';

var Bowling = function(){
  this.framenr = 1
  this.rollnr = 1
  this.score = []
  this.pinsnr = 10
}

var randomnumber = function() {
   console.log("is called")
   return 8
};

  Bowling.prototype.roll1 = function(){
    score1 = (this.pinsnr - randomnumber())
    return score1
  };


bowl = new Bowling
bowl.roll1();
