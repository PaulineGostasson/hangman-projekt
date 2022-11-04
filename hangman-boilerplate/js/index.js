const alphabetUL = document.querySelector("#alphabet-hold");
const correctWordUL = document.querySelector("#correct-word-ul");
const wrongGuesses = document.querySelector("#guesses-left");
const resetButton = document.querySelectorAll(".reset-button");
const slider = document.querySelector(".slider");
const winOrLoseText = document.querySelector(".win-or-lose-text");
const bodyElem = document.querySelector("body");
const correctWordTxt = document.querySelector(".correct-word-txt");
const correctWordArray = [];
const wrongGuessesArray = [];
const rightGuessesArray = [];
let wrongGuessesCounter = 5;
let correctWord = "";
let guessOfLetter = "";
let userCategoryChoice = 0;
// Keyboard [A~>Z]
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

getRandomWord();
console.log(correctWord);

// This loop creates the keyboard buttons in a list.
for (let i = 0; i < alphabetArray.length; i++) {
  const letterToPush = `<li><button onclick="getLetter(this)" id="button${alphabetArray[i]}">${alphabetArray[i]}</button></li>`;
  alphabetUL.insertAdjacentHTML("beforeend", letterToPush);
}

// When you press the Restart / Play Again button ~> this reloads the page.
resetButton.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.reload();
  });
});

// here we push one letter at a time into the [correctWordArray].
for (let i = 0; i < correctWord.length; i++) {
  correctWordArray.push(correctWord[i]);
}

// ?
for (let i = 0; i < correctWordArray.length; i++) {
  correctWordLetterToPush = `<li><p class="mark-disabler letter${correctWordArray[i]}">${correctWordArray[i]}</p></li>`;
  correctWordUL.insertAdjacentHTML("beforeend", correctWordLetterToPush);
}

// Find keyboard press key and make a guess on that letter.
bodyElem.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toUpperCase();
  guessOfLetter = keyPressed;
  makeAGuess();
});

// Find button press key and make a guess on that letter.
function getLetter(alphabetUL) {
  guessOfLetter = alphabetUL.innerText;
  makeAGuess();
}

// The logic behind the make a guess function!
function makeAGuess() {
  let pTag = document.querySelectorAll(`.letter${guessOfLetter}`);
  let alphaButton = document.querySelector(`#button${guessOfLetter}`);

  if (wrongGuessesArray.includes(guessOfLetter)) {
    return;
  } else if (rightGuessesArray.includes(guessOfLetter)) {
    return;
  } else {
    let isTheGuessCorrect = false;
    for (let i = 0; i < correctWordArray.length; i++) {
      if (guessOfLetter === correctWordArray[i]) {
        isTheGuessCorrect = true;
        rightGuessesArray.push(guessOfLetter);
        pTag.forEach((x) => {
          x.classList.add("make-visible");
        });
        alphaButton.classList.add("right-answer");
      }
    }
    if (isTheGuessCorrect === false) {
      wrongGuessesArray.push(guessOfLetter);
      alphaButton.classList.add("wrong-answer");

      if (wrongGuessesCounter > 0) {
        wrongGuessesCounter--;
        wrongGuesses.innerText = `Guesses Left: ${wrongGuessesCounter}`;
      }

      if (wrongGuessesCounter === 4) {
        document.querySelector("figure").classList.add("scaffold");
      }

      if (wrongGuessesCounter === 3) {
        document.querySelector("figure").classList.add("head");
      }

      if (wrongGuessesCounter === 2) {
        document.querySelector("figure").classList.add("body");
      }

      if (wrongGuessesCounter === 1) {
        document.querySelector("figure").classList.add("arms");
        wrongGuesses.style.boxShadow = "0 0 10px red";
        wrongGuesses.style.color = "#FF5E5E";
      }

      if (wrongGuessesCounter === 0) {
        document.querySelector("figure").classList.add("legs");
      }
    }
  }
  // WIN
  if (rightGuessesArray.length === correctWordArray.length) {
    winOrLoseText.innerText = "YOU WON";
    slider.style.backgroundColor = "#076D00";
    correctWordTxt.style.display = "none";
    toggleSlider();
  }
  // LOSE
  if (wrongGuessesArray.length === 5) {
    winOrLoseText.innerText = "YOU LOST";
    slider.style.backgroundColor = "#850000";
    toggleSlider();
  }
}

// Function that toggles the slider back and fourth.
function toggleSlider() {
  slider.classList.toggle("show");
}

// Function that gives us a random word from the categoryWords Array when called.
function getRandomWord() {
  let categoryWords = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Ecuador",
    "Egypt",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Paraguay",
    "Peru",
    "Poland",
    "Portugal",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Samoa",
    "Satellite",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Tunisia",
    "Turkey",
    "Uganda",
    "Ukraine",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  categoryWords = categoryWords.map(function (oneCountry) {
    return oneCountry.toUpperCase();
  });
  correctWord = categoryWords[Math.floor(Math.random() * categoryWords.length)];
  correctWordTxt.innerText = `Correct Word : ${correctWord}`;
}

/* TODO FREDAG 2022-11-04:
6. städa kod som inte gör något och dubbelkolla så allt är på engelska och bra kommenterat...
7. TESTA OM PROGRAMMET FUNKAR SOM DET SKA! :D
LADDA UPP / LÄNKA SIDAN TILL JOHAN OCH CHRISTOFFER :D :) :) :D*/
