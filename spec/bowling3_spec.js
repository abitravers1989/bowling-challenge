describe("Frame/ game 1", function(){

  var bowling

  beforeEach(function(){
    bowling = new Bowling();
    // score = new Score();
  });

// NEED A SPY HERE
  it("goes to roll 2 if roll 1 does not equal a strike",function(){
    bowling.strike = false;
    bowling.roll1();
    bowling.gameframe();
    expect(bowling.roll2()).toHaveBeenCalled();
  });

  it("The current score cannot be higher than 10", function(){
    bowling.roll1();
    bowling.gameframe();
    bowling.roll2();
    expect(bowling.currentscore).toBeLessThan(11)
  });

});
