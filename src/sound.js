class Sound {
  constructor(src, vol, loop) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.volume = vol;
    this.sound.loop = loop || false;
  }

  play() {
    this.sound.play();
  }
  stop() {
    this.sound.pause();
  }
}