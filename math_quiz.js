// math_quiz.js
// Generate simple math questions with random numbers.
// Author: Jackie P, aka TheDataElemental


let continue_choice = 'y';

// Game loop
while (continue_choice == 'y') {
	
	// Generate numbers for random math problem
	let first_number = Math.floor(Math.random() * 100);
	let second_number = Math.floor(Math.random() * 100);
	
	// Flip a coin to determine if problem is addition or subtraction
	let add_or_sub = Math.floor(Math.random() * 2);
	
	// Give player an addition problem
	if (add_or_sub == 0) {	
		var answer = first_number + second_number;
		player_answer = window.prompt(first_number + " + " + second_number + " = ?");
	}
	
	// Give player a subtraction problem
	if (add_or_sub == 1) {	
		var answer = first_number - second_number;
		player_answer = window.prompt(first_number + " - " + second_number + " = ?");
	}

	// Tell player if they win or lose
	if (player_answer == answer) {
		alert("Correct! =D");
	}
	if (player_answer != answer) {
		alert("Incorrect =(");
	}
	
	// Ask player if they want to continue
	continue_choice = '';
	while (!(['y', 'Y', 'n', 'N', 'yes', 'YES', 'no', 'NO'].includes(continue_choice))) {
		continue_choice = window.prompt("Continue? y/n: ");
	}
}
