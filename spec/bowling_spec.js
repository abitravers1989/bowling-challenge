describe("Bowling start of the game functionalities", function(){

  var bowling

  beforeEach(function(){
    bowling = new Bowling();
    score = new Score();
  });


  // it("the total score starts as an empty array", function(){
  //   expect(bowling.this.score).toEqual([ ]);
  // });

  it("the current score starts at 0", function(){
    expect(bowling.currentscore).toEqual(0);
  });

  it("Number of pins starts at 10", function(){
    expect(bowling.pinsnr).toEqual(10);
  });

});
