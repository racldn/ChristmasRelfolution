describe("Game", function(){
  var game, canvas, elf, weapon, bullet;
  beforeEach(function() {
    canvas = document.getElementById("canvas");
    game = new Game(canvas);
    elf = jasmine.createSpyObj('elf',['draw','update']);
    weapon = jasmine.createSpyObj('weapon',['draw','update']);
    bullet = jasmine.createSpyObj('bullet',['draw','update']);

  });

  describe("new game", function() {
    it("should start new game", function(){
      expect(game).toEqual(game);
    });
  });

  describe("update", function() {
    it("should call elf's update method", function(){
      game.addElf(elf);
      game.update();
      expect(elf.update).toHaveBeenCalled();
    });

    it("should call weapon's update method", function(){
      game.addWeapon(weapon);
      game.update();
      expect(weapon.update).toHaveBeenCalled();
    });

    it("should call bullets's update method", function(){
      game.addBullet(bullet);
      game.update();
      expect(bullet.update).toHaveBeenCalled();
    });
  });

  describe("addElf", function() {
    it("should add elf in elves array(game.elves)", function(){
      game.addElf(elf);
      expect(game.elves).toContain(elf);
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

  describe("removeBullet", function() {
    it("should remove bullet from bullets array", function(){
      game.addBullet(bullet);
      game.removeBullet(bullet);
      expect(game.bullets).not.toContain(bullet);
    });
  });

})