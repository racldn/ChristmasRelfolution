class Sound {
  constructor(src, vol) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.volume = vol;
  }

  play() {
    this.sound.play();
  }
  stop() {
    this.sound.pause();
  }
}