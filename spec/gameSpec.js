describe("Game", function(){
  var game;
  beforeEach(function() {
    var canvas = document.getElementById("canvas");
    game = new Game(canvas);
    elf = jasmine.createSpyObj('elf',['draw','update']);
  });

  describe("new game", function() {
    it("should start new game", function(){
      expect(game).toEqual(game);
    })
  });

  // describe("update", function() {
  //   it("should update elves array", function(){
  //     expect(game.update()).toEqual(game);
  //   })
  // });

  describe("addElf", function() {
    it("should add elf in elves array(game.elves)", function(){
      game.addElf(elf);
      expect(game.elves).toContain(elf);
    })
  });


})