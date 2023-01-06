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
//the return is an object so I can access all the choices 
 return {
  chosenLength: Number(length),
  chosenLowerCase: lowerCase,
  chosenUpperCase: upperCase,
  chosenNumeric: numerics,
  chosenSpecial: specials,
}
}

// Function for getting a random element from an array
function getRandom(arr) {
 return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
function generatePassword() {
    var options = getPasswordOptions();

  var password = [];
if (10 > options.chosenLength || options.chosenLength > 64){
  alert("Password must to be between 10 and 64 character long. Try again.")
} else if (10 < options.chosenLength < 64 ) {
  for(let i = 0; i < options.chosenLength; i++){
   var characters = [getRandom(specialCharacters), getRandom(numericCharacters), getRandom(lowerCasedCharacters), getRandom(upperCasedCharacters)] 
   if (options.chosenLowerCase) {
    password.push(characters[2])
  } else if (options.chosenNumeric){
    password.push(characters[1])
  } else if (options.chosenSpecial){
    password.push(characters[0])
  } else if (options.chosenUpperCase){
    password.push(characters[3])
  } else if (options.chosenLowerCase && options.chosenSpecial){
    password.push[characters]
  } else if (option)

  
  }
  console.log(password)
}

}


generatePassword()




/*
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

