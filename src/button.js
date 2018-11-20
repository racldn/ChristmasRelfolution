class Button {
  constructor(xL, xR, yT, yB) {
    this.xLeft = xL;
    this.xRight = xR;
    this.yTop = yT;
    this.yBottom = yB;
  }

  isClicked(mouseX, mouseY) {
    return (mouseX >= this.xLeft && mouseX <= this.xRight && mouseY >= this.yTop && mouseY <= this.yBottom)
  }
}
