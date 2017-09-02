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

});
