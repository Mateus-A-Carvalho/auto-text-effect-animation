const wordList = ["Web Developer", "Freelancer", "Software Engineer", "Mateus Carvalho DEV"];
const headingEl = document.querySelector('#main-heading')
const bodyEl = document.querySelector('body');
console.log(bodyEl);

let wordListIndex = 0;
let characterIndex = 0;

updateText()
updateBackgroundImg()

function updateText() {
  characterIndex++;
  headingEl.style.fontWeight = '300'
  headingEl.innerHTML = `I'm ${wordList[wordListIndex].slice(0, 1) === 'M' ? "" : "a" } <em>${wordList[wordListIndex].slice(0, characterIndex)}</em>`;

  if(characterIndex === wordList[wordListIndex].length) {
    wordListIndex++;
    characterIndex = 0;
  }

  setTimeout(updateText, 200);
  setTimeout(updateBackgroundImg, 200);
}
