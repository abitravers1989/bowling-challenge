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

 var randomnumber2 = function() {
   return Math.floor(Math.random() * 10) + 1
 };

 Bowling.prototype.roll1 = function(){
   rollnr = randomnumber1()
   this.currentscore += rollnr
   console.log(this.currentscore)
   console.log(rollnr)
   this.pinsnr -= rollnr
   console.log(rollnr)
   console.log(this.pinsnr)
 };

 Bowling.prototype.roll2 = function(){
   this.pinsnr -= randomnumber1()
   this.currentscore += randomnumber1()
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
