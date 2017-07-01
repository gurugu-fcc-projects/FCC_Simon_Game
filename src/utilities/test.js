export const testSetCanvas = () => {
  const canvas = document.querySelector('canvas');

  canvas.width = Math.min(640, window.innerWidth);
  canvas.height = Math.min(480, window.innerHeight);
};

export const clearDisplay = () => {
  const canvas = document.querySelector('canvas');
  const cx = canvas.getContext('2d');

  cx.fillStyle = 'rgb(52,166,251)';
  cx.fillRect(0, 0, canvas.width, canvas.height);
};

export const drawCircle = (coordinates) => {
  const canvas = document.querySelector('canvas');
  const cx = canvas.getContext('2d');
  const { x, y } = coordinates;

  cx.strokeColor = 'red';
  cx.beginPath();
  cx.arc(x, y, 20, 0, 7);
  cx.stroke();
};

export const Circle = {
  // initialize new cirlce
  init: (x = 100, y = 0, xShift = 10, speed = 1, size = 10) => {
    this.canvas = document.querySelector('canvas');
    this.cx = this.canvas.getContext('2d');
    this.isShiftingLeft = Math.random() > 0.5 ? true : false;
    this.x = x;
    this.y = y;
    this.xShift = xShift;
    this.currentXShift = 0;
    this.speed = speed;
    this.size = size;
  },
  // draw circle
  draw: () => {
    // restart circle animation when it reaches the end
    if (this.y > this.canvas.height + 10) {
      this.y = -40;
    }
    // move circle left if reached far right
    if (this.currentXShift === this.xShift) {
      this.isShiftingLeft = true;
    }
    // move circle right if reached far left
    if (this.currentXShift === this.xShift * -1) {
      this.isShiftingLeft = false;
    }
    // move circle left or right
    if (this.isShiftingLeft) {
      this.currentXShift -= 1;
    } else {
      this.currentXShift += 1;
    }
    // increase X coordinate by the set pixels
    this.y += this.speed;
    // draw circle at new coordinates
    this.cx.strokeColor = 'red';
    this.cx.beginPath();
    this.cx.arc(this.x + this.currentXShift, this.y, this.size, 0, 7);
    this.cx.stroke();
  }
};
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
