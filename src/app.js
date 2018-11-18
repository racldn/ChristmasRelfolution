// to start game class and testing purpose
const canvas = document.getElementById("canvas");
createGridOnCanvas(document.getElementById("canvas-grid"));

const game = new Game(canvas);
game.addWeapon(new Weapon(700, 0, game));
game.addWeapon(new Weapon(700, 100, game));
game.addWeapon(new Weapon(700, 200, game));
game.addWeapon(new Weapon(700, 300, game));

setInterval(() => {
  const elf = new Elf(game);
	game.addElf(elf);
}, 5000);

