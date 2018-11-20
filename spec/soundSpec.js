describe("Sound", function(){
  var sound, src;
  beforeEach(function(){
    src = "mockSrc";
    audioSpy = jasmine.createSpyObj('audio', ['play', 'pause', 'setAttribute']);
    audioSpy.style = {};
    spyOn(document, 'createElement').and.returnValue(audioSpy);
    sound = new Sound(src);
  });

  describe("play", function() {
    it("shouls play sound", function(){
      sound.play();
      expect(audioSpy.play).toHaveBeenCalled();
    })
  });

  describe("stop", function(){
    it("should stop sound", function() {
      sound.stop();
      expect(audioSpy.pause).toHaveBeenCalled();
    })
  });

})
