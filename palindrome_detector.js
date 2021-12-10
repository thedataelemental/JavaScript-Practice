// palindrome_detector.js
// Detects if a string is a palindrome or not
// Author: Jackie P, aka TheDataElemental


let string = window.prompt("Input string: ");

// Search string from start and end for non-matching characters
let is_palindrome = true;
for (let char = 0; char < string.length; char++) {
	if (!(string[char] == string[string.length - (1 + char)])) {
		is_palindrome = false;
	}
}

// Results
if (is_palindrome == false) {
	alert("not a palindrome.");
}
if (is_palindrome == true) {
	alert("Palindrome.");
}
