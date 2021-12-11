// tic_tac_toe.js
// Play tic tac toe against an AI who chooses random spaces
// Author: Jackie P, aka TheDataElemental


// Check if player has won or lost
function game_over_check() {
	// Designate all possible lines of 3 spaces to determine win/loss
	let top_row = [spaces.NW, spaces.N, spaces.NE];
	let middle_row = [spaces.W, spaces.C, spaces.E];
	let bottom_row = [spaces.SW, spaces.S, spaces.SE];
	let left_column = [spaces.NW, spaces.W, spaces.SW];
	let middle_column = [spaces.N, spaces.C, spaces.S];
	let right_column = [spaces.NE, spaces.E, spaces.SE];
	let diagonal_1 = [spaces.NW, spaces.C, spaces.SE];
	let diagonal_2 = [spaces.SW, spaces.C, spaces.NE];
	let lines = [top_row, middle_row, bottom_row, left_column, middle_column, right_column, diagonal_1, diagonal_2];
	
	// Check for line of 3 matching spaces
	for (let x in lines) {
		if ((lines[x][0] == 'X') && (lines[x][1] == 'X') && (lines[x][2] == 'X')) {
			loop_game = false;
			alert("You win!");
			break;
		}
		if ((lines[x][0] == 'O') && (lines[x][1] == 'O') && (lines[x][2] == 'O')) {
			loop_game = false;
			alert("You lose!");
			break;
		}
	}
}


let welcome_text = `Welcome to Tic Tac Toe.
You're X, and I'm O.`;

let prompt_text = `Options include:
NW (Northwest), N (North), NE (Northeast),
W (West), C (Center), E (East) ,
SW (Southwest), S (South), and SE (Southeast). 
Choose your space: \n`;

// Generate blank board
const spaces = {
	NW: '_',
	N: '_',
	NE: '_',
	E: '_',
	SE: '_',
	S: '_',
	SW: '_',
	W: '_',
	C: '_'
};
let free_spots = ['NW', 'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'C'];
let choices = ['NW', 'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'C'];

alert(welcome_text);

// Main game loop
loop_game = true;
while (loop_game == true) {
	// Check for tie game
	if (free_spots.length == 0) {
		alert("Tie game!");
		break;
	}
	
	// Player turn
	let prompt = prompt_text + "|_" + spaces.NW + "_|_" + spaces.N + "_|_" + spaces.NE + "_|\n|_" + spaces.W + "_|_" + spaces.C + "_|_" + spaces.E + "_|\n|_" + spaces.SW + "_|_" + spaces.S + "_|_" + spaces.SE + "_|";
	player_choice = '';
	while (!(free_spots.includes(player_choice))) {
		raw_choice = window.prompt(prompt);
		player_choice = raw_choice.toUpperCase();
	};
	// Remove taken spot from list of free spaces
	splice_index = free_spots.indexOf(player_choice);
	free_spots.splice(splice_index, 1);
	spaces[player_choice] = 'X';
	// Show board
	alert("Your turn: \n|_" + spaces.NW + "_|_" + spaces.N + "_|_" + spaces.NE + "_|\n|_" + spaces.W + "_|_" + spaces.C + "_|_" + spaces.E + "_|\n|_" + spaces.SW + "_|_" + spaces.S + "_|_" + spaces.SE + "_|");
	game_over_check();
	
	if (loop_game == false) {
		break;
	}
	
	// Check for tie game
	if (free_spots.length == 0) {
		alert("Tie game!");
		break;
	}
	
	// AI turn
	ai_choice = ''
	while (!(free_spots.includes(ai_choice))) {
		ai_choice = choices[Math.floor(Math.random() * 8)];
	};
	// Remove taken spot from list of free spaces
	splice_index = free_spots.indexOf(ai_choice);
	free_spots.splice(splice_index, 1);
	spaces[ai_choice] = 'O';
	// Show board
	alert("My turn: \n|_" + spaces.NW + "_|_" + spaces.N + "_|_" + spaces.NE + "_|\n|_" + spaces.W + "_|_" + spaces.C + "_|_" + spaces.E + "_|\n|_" + spaces.SW + "_|_" + spaces.S + "_|_" + spaces.SE + "_|");
	game_over_check();
}
