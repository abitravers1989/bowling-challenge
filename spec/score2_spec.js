describe("Score is calculated correctly including bonuses", function(){

  var score

  beforeEach(function(){
    score = new Score();
    bowling = new Bowling();
  });

  it("The bonus amount is calculated from the stike and total score array",function(){
    score.calculatingframe(10, false, 0, false);
    score.calculatingframe(2, false, 8, true);
    score.calculatingframe(2, false, 3, false);
    score.calculatingframe(10, true, 0, false);
    score.calculatingframe(2, false, 8, true);
    score.calculatingframe(2, false, 3, false);
    score.calculatingframe(10, true, 0, false);
    score.calculatingframe(2, false, 8, true);
    score.calculatingframe(2, false, 3, false);
    score.calculatingframe(2, false, 8, true);
    expect(score.strike).toContain(false, false, false, true, false, false, true, false, false, false)
    expect(score.spare).toContain(false, true, false, false, true, false, false, true, false, true);
    expect(score.calculatingtotalscorewithbonus()).toEqual(105);
  });
});
//
// expect(score.spare).toContain(false, true, false, false, true, false, false, true, false, true);
