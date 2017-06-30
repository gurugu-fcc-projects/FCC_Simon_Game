export const moveTestBall = () => {
  const testBall = document.querySelector('.test-ball');
  const windowHeight = window.innerHeight;
  let pos = 0;
  let opacity = 0;

  setInterval(frame, 10);
  testBall.style.opacity = opacity;

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
    }
  }
};
