var Bowling = function(){
  this.score = []
  this.framenr = 1
  this.rollnr = 1
  this.currentscore = 0
  this.pinsnr = 10
  this.strike = false
  // this.bonus = 5
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
   maxnr = this.pinsnr
   return Math.floor(Math.random() * maxnr) + 1
 };

 Bowling.prototype.roll2 = function(){
   rollnr2 = randomnumber2()
   console.log(rollnr2)
   this.pinsnr -= rollnr2
   this.currentscore += rollnr2
 };

  Bowling.prototype.gameframe = function(){
    // while this.framenr >= 10
      bowl1 = Bowling.prototype.roll1();
      if (bowl1 === 10){
        this.strike = true
        this.totalscore.push(10)
      } else {
        Bowling.prototype.roll2();
      }
    };

bowl = new Bowling
bowl.roll1();
bowl.gameframe();
bowl.roll2();
