describe("Bowling", function(){

  var bowling

  beforeEach(function(){
    bowling = new Bowling();
  });

  it("starts on frame number 1", function(){
    expect(bowling.framenr).toEqual(1);
  });

  it("starts on roll number 1", function(){
    expect(bowling.rollnr).toEqual(1);
  });

  it("the score starts as an empty array", function(){
    expect(bowling.score).toEqual([]);
  });

  it("Number of pins starts at 10", function(){
    expect(bowling.pinsnr).toEqual(10);
  });

   describe("Throwing a bowling ball", function(){

     it("A random number is generated for roll 1", function(){

     });

   });

});
