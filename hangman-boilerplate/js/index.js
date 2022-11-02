document.querySelector("figure").classList.add("scaffold");
document.querySelector("figure").classList.add("head");
document.querySelector("figure").classList.add("body");
document.querySelector("figure").classList.add("arms");
document.querySelector("figure").classList.add("legs");

const alphabetUL = document.querySelector("#alphabet-hold");
const correctWordUL = document.querySelector("#correct-word-ul");
let correctWord = "";

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

// Gets a random word from word array.
function getRandomWord() {
  const categoryWords = ["SWEDEN", "DENMARK", "USA"];
  correctWord = categoryWords[Math.floor(Math.random() * categoryWords.length)];
}

// Hitta knappen med hjälp av musklick...
function getLetter(alphabetUL) {
  console.log(alphabetUL.innerText);
}

// hitta knapp med hjälp av knapptryck...
const bodyElem = document.querySelector("body");
bodyElem.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toUpperCase();
  console.log(keyPressed);
  let correctGuess = false;

  for(let i = 0; i < correctWord.length; i++) {
      if (keyPressed === correctWord[i]) {
          console.log('Rätt bokstav');
          correctGuess = true;
      }
    }});