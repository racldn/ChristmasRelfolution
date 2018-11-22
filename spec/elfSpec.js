describe("Elf", function(){
  var elf, game, ctx, canvas;
  beforeEach(function(){
    ctx = jasmine.createSpyObj('ctx', ['drawImage', 'getContext','filter']);
    game = jasmine.createSpyObj('game', ['update']);
    game.canvas = jasmine.createSpyObj('canvas', {
      getContext : function(){
        return ctx;
      }
    });
    game.ctx = ctx;
    game.canvas.width = 500;
    elf = new Elf(game, "fakeImage", 1, 1);
  });
  describe("new elf", function(){
    it("should create new elf", function(){
      expect(elf).toEqual(elf);
    });
  });
   
  describe("draw", function(){
    it("should call ctx's drawImage function", function(){
      elf.draw();
      expect(ctx.drawImage).toHaveBeenCalled();
    });
  });
  
  describe("update", function(){
    it("should call draw function on elf", function(){
      spyOn(elf, 'draw');
      elf.update();
      expect(elf.x).toEqual(1);
      expect(elf.draw).toHaveBeenCalled();
    });
  });
 }) 