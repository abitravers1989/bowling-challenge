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
