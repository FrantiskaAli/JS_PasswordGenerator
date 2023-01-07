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
 
 const length = prompt("How long would you like your password to be?");//will return numbers


 const lowerCase = confirm("Would you like your password to include lowercase letters?");//will return boolean

 
 const upperCase = confirm("Would you like your password to include uppercase letters?");//will return boolean

 const numerics = confirm("Would you like your password to include numbers?");//will return boolean
 
 const specials = confirm("Would you like your password to include special characters?");//will return boolean
//the return is an object so I can access all the choices 
 
let options = [
  length,
 {isTrue: lowerCase, arrayAssigned: lowerCasedCharacters}, 
 {isTrue:upperCase, arrAssigned : upperCasedCharacters },
 {isTrue: numerics, arrAssigned : numericCharacters},
 {isTrue: specials, arrAssigned : specialCharacters},]
 return options;
 }
// Function for getting a random element from an array
function getRandom(arr) {
 return arr[Math.floor(Math.random() * arr.length)]
}



// Function to generate password with user input
/*function generatePassword() {
  var password = [];
  var options = getPasswordOptions();
    for(let i= 0; i < options.chosenLength; i++){

        for (const key in options) {
        if (options.name === true){
          password.push(getRandom(options.arrAssigned))
        };
      }
     return password
    }
    
    //options.filter(options => options.name == true);
    //password.push(getRandom(options.arrAssigned));

    //for (const _key in options){
      //if(options.name == true){
       // password.push(getRandom(options.arrAssigned))
      //}
   // }


  //for(let i = 0; i < options.chosenLength; i++){
   //var characters = [getRandom(specialCharacters), getRandom(numericCharacters), getRandom(lowerCasedCharacters), getRandom(upperCasedCharacters)] 
   //password.push(characters[Math.floor(Math.random() * 4)])
  }






console.log(generatePassword())


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
generateBtn.addEventListener('click', writePassword); */