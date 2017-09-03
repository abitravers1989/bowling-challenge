describe("Score", function(){

  var score

  beforeEach(function(){
    score = new Score();
    bowling = new Bowling();
  });

   it("the total score starts as an empty array", function(){
     expect(score.totalscore).toEqual([]);
   });

   it("starts on frame number 1", function(){
     expect(score.framenr).toEqual(1);
   });

   it("calculates the score of a frame when neither a spare or strike happen", function(){
     score.calculatingframe(1, false, 3, false)
     expect(score.totalscore).toContain(4)
   });

   it("calculates the score when there is a strike", function(){
     var strikebonus = 10
    //  assign an arbitary bonus of 10 for strike at the second roll number
     score.calculatingframe(10, true, strikebonus, false)
     expect(score.totalscore).toContain(20)
   });

   it("records if there is a strike in a hash with the frame number ONLY WHEN FRAME 1 ATM", function(){
     score.hasstrike(1, true)
     expect(score.strike).toEqual({1: true})
   });

  //  it("if the number of pins knocked down in roll 1 is 10 then strike is changed to true", function(){
  //   //  create a spy object for 10 to go into bowl.roll1
  //    expect(score.strike).toEqual(true);
  //  });
   //
  //  it("counts the frame number the game is on")
   //
  //  it("calculates the score of a frame")
   //
  //  it("accepts two numbers and two true or false statements")
   //
  //  it("asigns 10 for a strike and 5 for a spare")

});
