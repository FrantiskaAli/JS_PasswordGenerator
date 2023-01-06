// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
alert("Welcome, please keep in mind password can only be 10-64 characters long and it will be required for you to choose at lease one type of characters.");
 
 var length = prompt("How long would you like your password to be?");//will return numbers


 var lowerCase = confirm("Would you like your password to include lowercase letters?");//will return boolean

 
 var upperCase = confirm("Would you like your password to include uppercase letters?");//will return boolean

 var numerics = confirm("Would you like your password to include numbers?");//will return boolean
 
 var specials = confirm("Would you like your password to include special characters?");//will return boolean

 return {
  chosenLength: length,
  chosenLowerCase: lowerCase,
  chosenUpperCase: upperCase,
  chosenNumeric: numerics,
  chosenSpecial: specials,
}
}

// Function for getting a random element from an array
/*function getRandom(arr) {

  return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  //this is what will be called
  //first function get password options
  //then generate passworrd
}




//_____________________________________________________________________________________________
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);*/

