var remainingGuesses = 7; // Number of remaining guesses
var currentAlphabet; // Variable to store the current randomly chosen alphabet

// Reset background color and class on a new game
function resetGame() {
  // Resetting the background color to the default
  document.body.style.backgroundColor = "#ecf0f1";
  // Remove the 'correct-guess' class to reset styling
  document.body.classList.remove("correct-guess");
  // Reset the number of remaining guesses
  remainingGuesses = 7;
  // Clearing the message display
  document.getElementById("message").textContent = "";
  // Enable input and check button for a new game
  enableInputAndButton();
  // Generate a new random alphabet for the current game
  currentAlphabet = getRandomAlphabet();
}

// Enable input and check button
function enableInputAndButton() {
  // Allowing user input for guessing
  document.getElementById("guessInput").disabled = false;
  // Enabling the 'Check' button for user interaction
  document.querySelector("button").disabled = false;
}

// Disable input and check button
function disableInputAndButton() {
  // Disabling user input to prevent further guesses
  document.getElementById("guessInput").disabled = true;
  // Disabling the 'Check' button to prevent further checks
  document.querySelector("button").disabled = true;
}

function checkGuess() {
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value.toLowerCase();

  if (guess === currentAlphabet) {
    // Displaying a success message and updating styling for a correct guess
    document.getElementById("message").textContent =
      "Congratulations! You guessed the correct alphabet: " +
      currentAlphabet.toUpperCase();
    document.body.classList.add("correct-guess");
    // Changing the background color to indicate a correct guess
    document.body.style.backgroundColor = "lightblue";
    // Disable input and check button after a correct guess
    disableInputAndButton();
  } else {
    remainingGuesses--;

    if (remainingGuesses > 0) {
      // Displaying a clue and the remaining guesses for an incorrect guess
      var clue =
        guess < currentAlphabet
          ? "Try a higher alphabet."
          : "Try a lower alphabet.";
      document.getElementById("message").textContent =
        "Oops! " + clue + " Remaining guesses: " + remainingGuesses;
    } else {
      // Displaying a message when the user runs out of guesses
      document.getElementById("message").textContent =
        "Sorry, you're out of guesses! The correct alphabet was: " +
        currentAlphabet.toUpperCase();
      // Changing the background color to indicate running out of guesses
      document.body.style.backgroundColor = "pink";
      // Disable input and check button after running out of guesses
      disableInputAndButton();
    }
  }
  // Clearing the input field after each guess
  guessInput.value = "";
}

function getRandomAlphabet() {
  // Generating a random alphabet for the current game
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

// Call resetGame to initialize the game
resetGame();
