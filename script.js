var remainingGuesses = 5; // Number of remaining guesses

function checkGuess() {
  var guess = document.getElementById("guessInput").value.toLowerCase();
  var alphabet = getRandomAlphabet();

  if (guess === alphabet) {
    document.getElementById("message").textContent =
      "Congratulations! You guessed the correct alphabet: " +
      alphabet.toUpperCase();
  } else {
    remainingGuesses--;

    if (remainingGuesses > 0) {
      var clue =
        guess < alphabet ? "Try a higher alphabet." : "Try a lower alphabet.";
      document.getElementById("message").textContent =
        "Oops! " + clue + " Remaining guesses: " + remainingGuesses;
    } else {
      document.getElementById("message").textContent =
        "Sorry, you're out of guesses! The correct alphabet was: " +
        alphabet.toUpperCase();
    }
  }
}

function getRandomAlphabet() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}
