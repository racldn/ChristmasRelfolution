// describe("Weapon", function(){
//   var weapon, x, y;
//   beforeEach(function() {
//     x = 700;
//     y = 0;
//     ctx = jasmine.createSpyObj('ctx', ['drawImage', 'getContext']);
//     game = jasmine.createSpyObj('game', ['addBullet']);
//     game.canvas = jasmine.createSpyObj('canvas', {
//       getContext : function(){
//         return ctx;
//       }
//     });
//     weapon = new Weapon(x, y, game);
//   });

//   describe("new waepon", function() {
//     it("should create new weapon", function(){
//       expect(weapon).toEqual(weapon);
//     });
//   });

//   describe("draw", function(){
//     it("should call ctx's drawImage function", function(){
//       weapon.draw(ctx);
//       expect(ctx.drawImage).toHaveBeenCalled();
//     });
//   });

//   describe("fire", function(){
//     it("should add bullet method on game", function(){
//       weapon.fire();
//       expect(game.addBullet).toHaveBeenCalled();
//     });
//   });

//   describe("update", function(){
//     it("should call draw function on weapon", function(){
//       spyOn(weapon, 'draw');
//       weapon.update(ctx);
//       expect(weapon.draw).toHaveBeenCalledWith(ctx);
//     });
//   });
// })