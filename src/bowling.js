
var Bowling = function(){
  this.score = []
  this.framenr = 1
  this.rollnr = 1
  this.currentscore = 0
  this.pinsnr = 10
  this.strike = false
  // this.bonus = 5
}

 var randomnumber = function() {
   return Math.floor(Math.random() * 10) + 1
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
      bowl1 = Bowling.prototype.roll1();
      console.log(Bowling.prototype.roll1())
      // returns 2 so the current score
      if (bowl1 === 10){
        this.strike = true
        this.totalscore.push(10)
      console.log(this.strike)
      console.log(this.totalscore)
      } else {
        Bowling.prototype.roll2();
      }
    };

bowl = new Bowling
bowl.roll1();
bowl.gameframe();
