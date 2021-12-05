// guess_the_number.js
// Guess the Number Game
// Author: Jackie P, aka TheDataElemental

let guess = ""
let answer = 64

// Main game loop
while(guess != answer) {
	guess = window.prompt("Guess the number.");
	if (guess < answer) {
		alert("Guess higher.");
	}
	if (guess > answer) {
		alert("Guess lower.");
	}
}
// Player guesses right
alert("Corect!");
