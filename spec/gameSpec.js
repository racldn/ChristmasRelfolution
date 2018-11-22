describe("Game", function(){
  var game, canvas, elf, weapon, bullet;

  beforeEach(function() {
    canvas = document.getElementById("game-canvas");
    game = new Game(canvas);
    elf = jasmine.createSpyObj('elf',['draw','update']);
    weapon = jasmine.createSpyObj('weapon',['draw','update']);
    bullet = jasmine.createSpyObj('bullet',['draw','update']);
    spyOn(collision,'bulletHitsSide').and.callThrough();
    spyOn(collision,'elfHitsWeapon').and.callThrough();
    spyOn(collision,'elfHitsBullet').and.callThrough();
    spyOn(collision,'elfHitsRightWall').and.callThrough();
  });

  describe("new game", function() {
    it("should start new game", function(){
      expect(game).toEqual(game);
    });
  });

  describe("update", function() {
   
    it("should call weapon's update method", function(){
      game.addWeapon(weapon);
      game.update();
      expect(weapon.update).toHaveBeenCalled();
    });

     it("should call bullets's update method", function(){
      game.addBullet(bullet);
      game.update();
      expect(bullet.update).toHaveBeenCalled();
      expect(collision.bulletHitsSide).toHaveBeenCalledWith(bullet, game);
    });

    it("should call elf's update method", function(){
      game.addElf();
      game.update();
      // expect(elf.update).toHaveBeenCalled();
      expect(collision.elfHitsRightWall).toHaveBeenCalled();
      expect(collision.elfHitsWeapon).toHaveBeenCalled();
      expect(collision.elfHitsBullet).toHaveBeenCalled();
    });
  });

  describe("addElf", function() {
    it("should add elf in elves array(game.elves)", function(){
      game.addElf();
      expect(game.elves.length).toEqual(1);
    });
  });

  describe("addWeapon", function() {
    it("should add weapon in weapons array", function(){
      game.addWeapon(weapon);
      expect(game.weapons).toContain(weapon);
    });
  });

   describe("addBullet", function() {
    it("should add bullet in bullets array(game.bullets)", function(){
      game.addBullet(bullet);
      expect(game.bullets).toContain(bullet);
    });
  });
 }) 