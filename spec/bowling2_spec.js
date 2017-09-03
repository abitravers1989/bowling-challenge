describe("Throwing a bowling ball", function(){

  var bowling

  beforeEach(function(){
       bowling = new Bowling();
       spy = spyOn(this.randomnumber, 'randomnumber();'),andCallFake(function(8))
      //  score = new Score();
   });


     it("The first roll changes the number of pins and the total score", function(){
       bowling.roll1(spy);
       expect(bowling.pinsnr).toEqual(2)
       expect(bowling.currentscore).toEqual(8)
     });
  });
