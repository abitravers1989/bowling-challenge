describe("Score", function(){

  var score

  beforeEach(function(){
    score = new Score();
    bowling = new Bowling();
  });

   it("the total score starts as an empty array", function(){
     expect(score.totalscore).toEqual([]);
   });

   it("calculates the score of a frame when neither a spare or strike happen", function(){
     score.calculatingframe(1, false, 3, false)
     expect(score.totalscore).toContain(4)
   });

   it("records if there is a strike in a hash with the frame number ONLY WHEN FRAME 1 ATM", function(){
     score.hasstrike(true)
     expect(score.strike).toContain(true)
   });

   it("calculates the score when there is a strike", function(){
     score.calculatingframe(10, true, 0, false);
     expect(score.totalscore).toContain(10)
     expect(score.strike).toContain(true)
    });

    it("keeps the stikes as an array and the total score of a hash as an array", function(){
      score.calculatingframe(10, true, 0, false);
      score.calculatingframe(7, false, 1, false);
      expect(score.totalscore).toContain(10, 8)
      expect(score.strike).toContain(true, false)
     });


     it("calculates the score when there is a spare", function(){
       score.calculatingframe(2, false, 8, true);
       expect(score.totalscore).toContain(10)
       expect(score.strike).toContain(false)
       expect(score.spare).toContain(true)
      });

     it("Keeps arrays of spares, strikes and the score", function(){
       score.calculatingframe(10, true, 0, false);
       score.calculatingframe(2, false, 8, true);
       score.calculatingframe(2, false, 3, false);
       expect(score.strike).toContain(true, false, false)
       expect(score.spare).toContain(false, true, false)
       expect(score.totalscore).toContain(10, 10, 5)
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
