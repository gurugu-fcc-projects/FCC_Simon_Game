export const canvasTest = (parent) => {
  this.canvas = document.createElement('canvas');
  this.canvas.width = Math.min(640, window.innerWidth);
  this.canvas.height = Math.min(480, window.innerHeight);
  parent.appendChild(this.canvas);
  this.cx = this.canvas.getContext('2d');

  this.animationTime = 0;

  this.drawFrame(0);
};

canvasTest.prototype.clear = function() {
  this.canvas.parentNode.removeChild(this.canvas);
};

canvasTest.prototype.drawFrame = function(step) {
  this.animationTime += step;

  this.clearDisplay();
  this.drawBackground();
  this.drawActors();
}

canvasTest.prototype.clearDisplay = function() {
  this.cx.fillStyle = 'rgb(52,166,251)';
  this.cx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}
/* HTML animation */

export const moveTestBall = () => {
  const testBall = document.querySelector('.test-ball');
  const windowHeight = window.innerHeight;
  const testBallStyleLeft = 100;
  let horizontalShift = 0;
  let isShiftingLeft = false;
  let pos = 0;
  let opacity = 0;

  setInterval(frame, 50);
  testBall.style.opacity = opacity;
  testBall.style.left = testBallStyleLeft + 'px';

  function frame() {
    if (pos === windowHeight - 70) {
      pos = 0;
      opacity = 0;
      testBall.style.opacity = 0;
    } else {
      pos++;
      testBall.style.top = pos + 'px';
      if (pos < 100 && testBall.style.opacity !== 1) {
        opacity += 0.01;
        testBall.style.opacity = opacity;
      }
      if (pos > windowHeight - 170) {
        opacity -= 0.01;
        testBall.style.opacity = opacity;
      }
      if (horizontalShift === 10) {
        isShiftingLeft = true;
      }
      if (horizontalShift === -10) {
        isShiftingLeft = false;
      }
      if (isShiftingLeft) {
        horizontalShift -= 1;
      } else {
        horizontalShift += 1;
      }
      testBall.style.left = testBallStyleLeft + horizontalShift + 'px';
    }
  }
};
