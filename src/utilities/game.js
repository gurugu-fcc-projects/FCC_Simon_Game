const sounds = [
  new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound1.mp3`),
  new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound2.mp3`),
  new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound3.mp3`),
  new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound4.mp3`),
];

export const activateBubble = (bubbleNumber) => {
  const bubble = document.querySelector(`.bubble-${bubbleNumber}`);
  // play sound & highlight a proper bubble
  bubble.classList.add('highlight');
  sounds[bubbleNumber - 1].play();
  // remove highlight after a short time
  window.setTimeout(() => bubble.classList.remove('highlight'), 500);
};
