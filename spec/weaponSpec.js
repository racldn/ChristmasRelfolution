describe("Weapon", function(){
  var weapon, x, y;
  beforeEach(function() {
    x = 700;
    y = 0;
    ctx = jasmine.createSpyObj('ctx', ['drawImage', 'getContext']);
    game = jasmine.createSpyObj('game', ['addBullet']);
    game.canvas = jasmine.createSpyObj('canvas', {
      getContext : function(){
        return ctx;
      }
    });
    weapon = new Weapon(x, y, game);
  });

  describe("new waepon", function() {
    it("should create new weapon", function(){
      expect(weapon).toEqual(weapon);
    });
  });
})