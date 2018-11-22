describe("GingerbreadMan", function(){
    var weapon, canvas, bullet, x, y, gingerbreadman, game;
    beforeEach(function() {
      x = 700;
      y = 0;
      game = jasmine.createSpyObj('game', ['addBullet']);
      game.canvas = jasmine.createSpyObj('canvas', {
        getContext : function(){
          return ctx;
        }
      });
      gingerbreadman = new GingerbreadMan(x, y, game);
      ctx = jasmine.createSpyObj('ctx', ['drawImage', 'getContext']);
      bullet = jasmine.createSpyObj('bullet',['draw','update']);
      weapon = new Weapon(x, y, game);

    });
describe("draw", function(){
    it("should call ctx's drawImage function", function(){
    //  var gingerbreadman = new GingerbreadMan(x, y, game);
    gingerbreadman.draw(ctx);
    expect(ctx.drawImage).toHaveBeenCalled();
    });
  });

  describe("fire", function(){
    it("should add bullet method on game", function(){
      gingerbreadman.fire();
      expect(game.addBullet).toHaveBeenCalledWith(bullet);
    });
  });

  describe("update", function(){
    it("should call draw function on weapon", function(){
    //   spyOn(gingerbreadman, 'draw');
      gingerbreadman.update(ctx);
      expect(gingerbreadman.draw).toHaveBeenCalledWith(ctx);
    });
  });

});