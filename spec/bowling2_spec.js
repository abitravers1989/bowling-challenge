describe("Throwing a bowling ball", function(){

  var bowling

  beforeEach(function(){
       bowling = new Bowling();
      //  score = new Score();
   });


     it("The first roll changes the number of pins and the total score", function(){
       this.randomnumber = 8
       bowling.roll1();
       expect(bowling.pinsnr).toEqual(2)
       expect(bowling.currentscore).toEqual(8)
     });
  });
