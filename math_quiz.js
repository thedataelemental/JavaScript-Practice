// math_quiz.js
// Generate simple math questions with random numbers.
// Author: Jackie P, aka TheDataElemental


let continue_choice = 'y'

// Game loop
while (continue_choice == 'y') {
	
	// Generate random addition problem
	let first_number = Math.floor(Math.random() * 100);
	let second_number = Math.floor(Math.random() * 100);
	let sum = first_number + second_number;
	player_answer = window.prompt(first_number + " + " + second_number + " = ?");

	// Tell player if they win or lose
	if (player_answer == sum) {
		alert("Correct! =D");
	}
	if (player_answer != sum) {
		alert("Incorrect =(");
	}
	
	// Ask player if they want to continue
	continue_choice = ''
	while (!(['y', 'Y', 'n', 'N', 'yes', 'YES', 'no', 'NO'].includes(continue_choice))) {
		continue_choice = window.prompt("Continue? y/n: ")
	}
}
