document.querySelector("figure").classList.add("scaffold");
document.querySelector("figure").classList.add("head");
document.querySelector("figure").classList.add("body");
document.querySelector("figure").classList.add("arms");
document.querySelector("figure").classList.add("legs");

const alphabetUL = document.querySelector("#alphabet-hold");
const correctWordUL = document.querySelector("#correct-word-ul");
let correctWord = "";
let wrongGuessesArray = [];
let rightGuessesArray = [];
let guessOfLetter = "";
let thePWeWantToChange = "";

// Get random word from array.
getRandomWord();

const alphabetArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

for (let i = 0; i < alphabetArray.length; i++) {
  const letterToPush = `<li><button onclick="getLetter(this)" id="button${alphabetArray[i]}">${alphabetArray[i]}</button></li>`;
  alphabetUL.insertAdjacentHTML("beforeend", letterToPush);
}

const correctWordArray = [];
for (let i = 0; i < correctWord.length; i++) {
  correctWordArray.push(correctWord[i]);
}

for (let i = 0; i < correctWordArray.length; i++) {
  correctWordLetterToPush = `<li><p class="mark-disabler letter${correctWordArray[i]}">${correctWordArray[i]}</p></li>`;
  correctWordUL.insertAdjacentHTML("beforeend", correctWordLetterToPush);
}

// This is what happens when we press a keyboard button.
const bodyElem = document.querySelector("body");
bodyElem.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toUpperCase();
  guessOfLetter = keyPressed;
  makeAGuess();
});

function getLetter(alphabetUL) {
  guessOfLetter = alphabetUL.innerText;
  makeAGuess();
}

// MAKE A GUESS LOGIC!
function makeAGuess() {
  let pTag = document.querySelectorAll(`.letter${guessOfLetter}`);
  if (wrongGuessesArray.includes(guessOfLetter)) {
    console.log("Du har redan gissat på denna och fått fel.");
  } else if (rightGuessesArray.includes(guessOfLetter)) {
    console.log("Du har redan gissat på denna och fått rätt.");
  } else {
    let isTheGuessCorrect = false;
    for (let i = 0; i < correctWordArray.length; i++) {
      if (guessOfLetter === correctWordArray[i]) {
        isTheGuessCorrect = true;
        rightGuessesArray.push(guessOfLetter);
        console.log("rätt gissning");
        console.log(`Array med rätt gissningar: ${rightGuessesArray}`);
        pTag.forEach((x) => {
          x.classList.add("make-visible");
        });
      }
    }
    if (isTheGuessCorrect === false) {
      wrongGuessesArray.push(guessOfLetter);
      console.log("fel gissning");
      console.log(`Array med fel gissningar: ${wrongGuessesArray}`);
    }
  }
}

// Function that gives us a random word from the categoryWords Array when called.
function getRandomWord() {
  const categoryWords = ["USA", "SWEDEN"];
  correctWord = categoryWords[Math.floor(Math.random() * categoryWords.length)];
}
