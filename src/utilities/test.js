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
