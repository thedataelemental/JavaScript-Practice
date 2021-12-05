// rock_paper_scissors.js
// Play rock paper scissors against an AI opponent
// Author: Jackie P, aka TheDataElemental


// Create rock, paper, & scissors objects with strengths & weaknesses
class Selection {
	constructor(type, strong_against, weak_against) {
		this.type = type;
		this.strong_against = strong_against;
		this.weak_against = weak_against;
	}
}

let rock = new Selection('Rock', 'Scissors', 'Paper');
let paper = new Selection('Paper', 'Rock', 'Scissors');
let scissors = new Selection('Scissors', 'Paper', 'Rock');

// Data for choice selection process
let choice_indeces = ['1', '2', '3'];
let choices = [rock, paper, scissors];
let prompt_text = `Choose now!
1 = Rock
2 = Paper
3 = Scissors
`;

// Start program
alert("Welcome to Rock Paper Scissors.");

// Player turn
raw_player_choice = '';
while (!(choice_indeces.includes(raw_player_choice))) {
	raw_player_choice = window.prompt(prompt_text);
}
player_choice = choices[raw_player_choice - 1];
alert("You chose: " + player_choice.type);

// AI turn
let ai_choice_index = Math.floor(Math.random() * 3);
let ai_choice = choices[ai_choice_index];
alert("I chose: " + ai_choice.type);

// Results
if (player_choice.type == ai_choice.weak_against) {
	alert("You win.");
}
if (player_choice.type == ai_choice.strong_against) {
	alert("You lose.");
}
if (player_choice.type == ai_choice.type) {
	alert("Tie game.");
}
