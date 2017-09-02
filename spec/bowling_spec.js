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

  it("the current score starts at 0", function(){
    expect(bowling.currentscore).toEqual(0);
  });

  it("the total score starts as an empty array", function(){
    expect(bowling.totalscore).toEqual([]);
  });

  it("Number of pins starts at 10", function(){
    expect(bowling.pinsnr).toEqual(10);
  });

});

   describe("Throwing a bowling ball", function(){

     var bowling

     beforeEach(function(){
       bowling = new Bowling();
      //  var randomnumber = jasmine.createSpyObj("randomnumber", 8)
      //  randomnumber = jasmine.createSpyObj('randomnumber', return 8)
     });

     it("The first roll changes the number of pins and the total score", function(){
       this.randomnumber = 8
       bowling.roll1();
       expect(bowling.pinsnr).toEqual(2)
       expect(bowling.currentscore).toEqual(8)
     });
    });
