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

getRandomWord();

const correctWordArray = [];
for (let i = 0; i < correctWord.length; i++) {
  correctWordArray.push(correctWord[i]);
}

for (let i = 0; i < correctWordArray.length; i++) {
  const correctWordLetterToPush = `<li><p class="mark-disabler letter${correctWordArray[i]}">${correctWordArray[i]}</p></li>`;
  correctWordUL.insertAdjacentHTML("beforeend", correctWordLetterToPush);
}

let guessOfLetter = "";

// hitta knapp med hjälp av knapptryck...
const bodyElem = document.querySelector("body");
bodyElem.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toUpperCase();
  guessOfLetter = keyPressed;
  makeAGuess();
});

// Hitta knappen med hjälp av musklick...
function getLetter(alphabetUL) {
  guessOfLetter = alphabetUL.innerText;
  makeAGuess();
}

function makeAGuess() {
  // Kolla om ordet redan finns i arrayen...
  let isTheGuessCorrect = false;
  for (let i = -1; i < correctWordArray.length; i++) {
    if (guessOfLetter === correctWordArray[i]) {
      console.log("Bokstaven finns med");
      isTheGuessCorrect = true;
      rightGuessesArray.push(guessOfLetter);
    }
  }
  if (isTheGuessCorrect === false) {
    console.log("fel gissning");
    wrongGuessesArray.push(guessOfLetter);
  }
}

// Gets a random word from word array.
function getRandomWord() {
  const categoryWords = ["SWEDEN", "DENMARK", "USA"];
  correctWord = categoryWords[Math.floor(Math.random() * categoryWords.length)];
}
