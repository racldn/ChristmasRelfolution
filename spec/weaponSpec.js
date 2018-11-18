describe("Weapon", function(){
  var weapon, canvas, bullet, x, y;
  beforeEach(function() {
    //Add this to mock setTimeout
    jasmine.clock().install();

    x = 700;
    y = 0;
    ctx = jasmine.createSpyObj('ctx', ['drawImage', 'getContext']);
    game = jasmine.createSpyObj('game', ['removeBullet', 'addBullet']);
    game.canvas = jasmine.createSpyObj('canvas', {
      getContext : function(){
        return ctx;
      }
    });
    bullet = jasmine.createSpyObj('bullet',['draw','update']);
    weapon = new Weapon(x, y, game);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  describe("new waepon", function() {
    it("should create new weapon", function(){
      expect(weapon).toEqual(weapon);
    });
  });

  describe("draw", function(){
    it("should call ctx's drawImage function", function(){
      weapon.draw(ctx);
      expect(ctx.drawImage).toHaveBeenCalled();
    });
  });

  describe("update", function(){
    it("should call draw function on weapon", function(){
      spyOn(weapon, 'draw');
      weapon.update(ctx);
      expect(weapon.draw).toHaveBeenCalledWith(ctx);
    });
  });
  
  describe("removeBullet", function() {
    it("should call remove bullet function on game", function(){
      weapon.removeBullet(bullet);
      expect(game.removeBullet).toHaveBeenCalledWith(bullet);
    });
  });

  describe("callBullet", function() {
    it("should call add bullet on game", function(){
      weapon.callBullet();
      expect(game.addBullet).toHaveBeenCalled();
    });
  });

});