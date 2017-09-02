describe("Frame/ game 1", function(){

  var bowling

  beforeEach(function(){
    bowling = new Bowling();
  });

    it("goes to roll 2 if roll 1 does not equal a strike",function(){
      bowling.strike = false
      roll1() = 7
      bowling.gameframe
      expect(bowling.roll2).toHaveBeenCalled();
    });
 });
