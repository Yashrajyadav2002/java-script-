// Show alert when page loads
alert("Welcome to Enhanced JavaScript Example!");

// Function to change background color randomly
function changeColor() {
  const colors = ["lightblue", "lightgreen", "lightyellow", "lightpink", "lavender", "lightcoral"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Reset background color
function resetColor() {
  document.body.style.backgroundColor = "white";
}

// Digital Clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = "Current Time: " + timeString;
}
setInterval(updateClock, 1000);

// Random Quote Generator
function showQuote() {
  const quotes = [
    "Believe in yourself!",
    "Success comes to those who work hard.",
    "Keep pushing forward.",
    "Dream big, work hard, stay focused.",
    "Hustle beats talent when talent doesn’t hustle."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = randomQuote;
}
