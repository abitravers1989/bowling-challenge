describe("Throwing a bowling ball", function(){

  var bowling

  beforeEach(function(){
       bowling = new Bowling();
      //  var randomnumber = 8
      //  spy = spyOn(randomnumber, 'randomnumber();'),andCallFake(function(8))
       score = new Score();
   });

     it("The first roll changes the number of pins and the total score", function(){
       bowling.roll1();
       expect(bowling.pinsnr).not.toEqual(10)
       expect(bowling.currentscore).not.toEqual(0)
     });

  });
