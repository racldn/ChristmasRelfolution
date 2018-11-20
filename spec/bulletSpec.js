describe("Bullet", function(){
  var bullet, game, ctx, x, y;
  beforeEach(function(){
    x = 700;
    y = 0;
    ctx = jasmine.createSpyObj('ctx', ['drawImage', 'getContext']);
    game = jasmine.createSpyObj('game', ['update']);
    game.canvas = jasmine.createSpyObj('canvas', {
      getContext : function(){
        return ctx;
      }
    });
    game.canvas.width = 500;
    bullet = new Bullet(x,y,game);
  });
  describe("new bullet", function(){
    it("should create new bullet", function(){
      expect(bullet).toEqual(bullet);
    });
  });
   
  describe("draw", function(){
    it("should call ctx's drawImage function", function(){
      bullet.draw(ctx);
      expect(ctx.drawImage).toHaveBeenCalled();
    });
  });
  
  describe("update", function(){
    it("should call draw function on bullet", function(){
      spyOn(bullet, 'draw');
      bullet.update(ctx);
      expect(bullet.draw).toHaveBeenCalledWith(ctx);
    });
  });
 }) 