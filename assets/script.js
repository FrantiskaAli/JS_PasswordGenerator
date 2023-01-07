// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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
 
 const long = prompt("How long would you like your password to be?");//will return numbers


 const lowerCase = confirm("Would you like your password to include lowercase letters?");//will return boolean

 
 const upperCase = confirm("Would you like your password to include uppercase letters?");//will return boolean

 const numerics = confirm("Would you like your password to include numbers?");//will return boolean
 
 const specials = confirm("Would you like your password to include special characters?");//will return boolean

 let options = [[lowerCase, lowerCasedCharacters], [upperCase, upperCasedCharacters], [numerics, numericCharacters], [ specials, specialCharacters], long]

 return options;//options array will be used to acces input data in other functions
 }
// Function for getting a random element from an array
function getRandom(arr) {
 return arr[Math.floor(Math.random() * arr.length)];
}


//this function will make sure we are only picking characters from chosen arrays
function pickFromOptions(par){
  let picked =[]
   for (let i = 0; i < par.length; i++){
    if (par[i][0] === true){
      let any = getRandom(par[i][1]);
      picked.push(any)
    }}
    return picked
}


// Function to generate password with user input
function generatePassword() {
  let password = [];
  let options = getPasswordOptions();
  //this if inside the function makes sure that users input is validated, in this case between 10 to 64 characters long and that at least one set of characters is picked
  if(options[4] < 10 || options[4] > 64){
    return alert("HEY! Password should not be shorter then 10 characters or longer then 64! Try again!")
  } else if (pickFromOptions(options).length < 1){
    return alert("How am I to create password without characters? Try again!!")
  } else{
  for (let i = 0; i < options[4]; i++){
     password.push(pickFromOptions(options)[Math.floor(Math.random() * pickFromOptions(options).length )])
        }
  return password.join('');} //.join joins password array without commas or spaces
    }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); 


