describe("Bowling start of the game functionalities", function(){

  var bowling

  beforeEach(function(){
    bowling = new Bowling();
    score = new Score();
  });

  it("starts on frame number 1", function(){
    expect(bowling.framenr).toEqual(1);
  });

  it("starts on roll number 1", function(){
    expect(bowling.rollnr).toEqual(1);
  });

  it("the current score starts at 0", function(){
    expect(bowling.currentscore).toEqual(0);
  });

  it("Number of pins starts at 10", function(){
    expect(bowling.pinsnr).toEqual(10);
  });

});
