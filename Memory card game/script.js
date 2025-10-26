const gameContainer = document.getElementById("game");
const restartBtn = document.getElementById("restart");

// Emoji pairs
const emojis = ["🐶", "🐱", "🦁", "🐸", "🐵", "🐼", "🐰", "🦊"];
let cards = [...emojis, ...emojis]; // duplicate for pairs

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedCount = 0;

// Shuffle cards
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// Create game board
function createBoard() {
  gameContainer.innerHTML = "";
  shuffle(cards);
  cards.forEach(emoji => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;
    card.textContent = "❓";
    card.addEventListener("click", flipCard);
    gameContainer.appendChild(card);
  });
}

function flipCard() {
  if (lockBoard || this.classList.contains("flipped")) return;

  this.classList.add("flipped");
  this.textContent = this.dataset.emoji;

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;
    checkMatch();
  }
}

function checkMatch() {
  lockBoard = true;

  if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchedCount += 1;
    resetTurn();

    if (matchedCount === emojis.length) {
      setTimeout(() => alert("🎉 You won!"), 300);
    }
  } else {
    setTimeout(() => {
      firstCard.textContent = "❓";
      secondCard.textContent = "❓";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

restartBtn.addEventListener("click", () => {
  matchedCount = 0;
  createBoard();
});

createBoard();
