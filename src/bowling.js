'use strict';

var Bowling = function(){
  this.framenr = 1
  this.rollnr = 1
  this.currentscore = 0
  this.totalscore = []
  this.pinsnr = 10
}

var randomnumber = function() {
   return 8
};

  Bowling.prototype.roll1 = function(){
    this.pinsnr -= randomnumber()
    this.currentscore += randomnumber()
  };


// bowl = new Bowling
// bowl.roll1();
// bowl.currentscore
