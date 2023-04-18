// Random password generator
// Runs in browser terminal
// 4/17/2023
// By Jackie P



// Possible characters to make up random password
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

let password = '';


// Get desired password length from user
let length = prompt("How many characters do you want your password to have?");


// Get desired character types from user
arrays_length = 0;
const arrays = [];

let include_letters = 'n';
let include_numbers = 'n';
let include_symbols = 'n';

include_letters = prompt("Include letters? Reply 'y' or 'n'.");
include_numbers = prompt("Include numbers? Reply 'y' or 'n'.");
include_symbols = prompt("Include symbols? Reply 'y' or 'n'.");

if (include_letters == 'y')
{
    arrays[arrays_length] = letters;
    arrays_length += 1;
}

if (include_numbers == 'y')
{
    arrays[arrays_length] = numbers;
    arrays_length += 1;
}

if (include_symbols == 'y')
{
    arrays[arrays_length] = symbols;
    arrays_length += 1;
}


// Make random password
for (let i = 0; i < length; i++) {

// Choose random character from above options
random_array = Math.floor(Math.random() * arrays.length);
random_index = Math.floor(Math.random() * arrays[random_array].length);

// Add new random character to existing password
password = password + arrays[random_array][random_index];
}


// Final output
console.log('New password: ' + password);
