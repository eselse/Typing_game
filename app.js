// Deifne the constants =========================================================
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// Init word
let randomWord;

// Init Score
let score = 0;

// Init time
let time = 10;

// Focus on text on start
text.focus();

// Start countig down
const timeInterval = setInterval(updateTime, 1000);

// Functions ==========================================================
// Generate randow word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDom() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Reload</button>
    `;
  endgameEl.style.display = "flex";
}

addWordToDom();

// Event listeners =========================================================
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText == randomWord) {
    addWordToDom();
    updateScore();

    //   Clear
    e.target.value = "";

    time += 2;

    updateTime();
  }
});
