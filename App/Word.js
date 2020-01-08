var Letter = require("./Letter");

// The Word constructor is responsible for creating an array of Letter objects and determining if the user guessed every Letter correctly

function Word(word) {
  // splits word into array of letters and instantiate a new `Letter` for each character then return an array
  this.letters = word.split("").map(function(char) {
    return new Letter(char);
  });
}

// setting `getSolution()` as a method
Word.prototype.getSolution = function() {
  return this.letters.map(function(letter) {
    return letter.getSolution();
  }).join("");
};

// setting `toString()` as a method
Word.prototype.toString = function() {
  return this.letters.join(" ");
};

// Checks to see if any of the letters in the array match the user's guess and updates `foundLetter`
Word.prototype.guessLetter = function(char) {
  var foundLetter = false;
  this.letters.forEach(function(letter) {
    if (letter.guess(char)) {
      foundLetter = true;
    }
  });

  // Print the word guessed so far
  console.log("\n" + this + "\n");

  // return whether we found a letter
  return foundLetter;
};

// Returns true if all letters in the word have been guessed
Word.prototype.guessedCorrectly = function() {
  return this.letters.every(function(letter) {
    return letter.visible;
  });
};

module.exports = Word;
