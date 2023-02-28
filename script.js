// Assignment Code
var generateBtn = document.querySelector('#generate');

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = [  "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
var numbers = new Array(1,2,3,4,5,6,7,8,9,0);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordOptions = [];
  var finalPassword = [];
  var upper;
  var lower;
  var special;
  var numbers;
  var passwordLength = 0;


  length = prompt("How many characters are in your password minimum 8 maximum 128?");
    if (length < 8 || length > 128) {
    alert("Password does not meet minimum requirements. Start Over.");
    return null;
  }

  if (length === undefined) {
    alert("Password does not meet minimum requirements. Start Over.");
    return "The Password";
  }

  var upper = confirm("Include upper case?");
  var lower = confirm("Include lower case?");
  var numbers = confirm("Include numbers?");
  var special = confirm("Include symbols?");

  if(!upper && !lower && !numbers && !special){
    alert("Password does not meet minimum requirements. Start Over.");
    return null;
  }
  if (upper) {
    passwordOptions = passwordOptions.concat(upper);
  }
  if (lower) {
    passwordOptions = passwordOptions.concat(lower);
  }
  if (numbers) {
    passwordOptions = passwordOptions.concat(numbers);
  }
  if (special) {
    passwordOptions = passwordOptions.concat(special);
  }

  console.log("passwordOptions", passwordOptions);

  for (var i = 0; i < passwordLength; i++) {
    finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
  }

  console.log(finalPassword);

  return finalPassword.join("");

}

generateBtn.addEventListener("click", writePassword);

// prompts for password criteria
function ChoicePrompts() {
  pwdLowerCase = confirm("lower case letters?");
  pwdUpperCase = confirm("upper case letters?");
  pwdNumbers = confirm("numbers?");
  pwdCharacters = confirm("special characters?");
}

// // Assignment code here

// var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// var special = [  "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
//   "~", "*", "?", ":"];
// var numbers = new Array(1,2,3,4,5,6,7,8,9,0);
// var userResponse = {} 



// function optionsforPassword() {
//   var range = prompt("How many characters are in your password? Note: Between 8-128")
//    if (range <8) {
//     alert ("Password does not meet minimum requirements. Start Over.")
//     return null;
//    }

//    if (range >128) {
//     alert ("Password is too long. Start Over.")
//     return null;
//    }

//    var lower = confirm ("Include lower case?")
//    var upper = confirm ("Include upper case?")
//    var numbers = confirm ("Include numbers?")
//    var symbols = confirm ("Include symbols?")
var generateBtn = document.querySelector('#generate');
//    userResponse = {range,lower,upper,symbols}
//    console.log = {userResponse}
// };


// 


// optionsforPassword()
// function generatePassword() {
//   console.log("passwordOptions", passwordOptions);

//   for (var i = 0; i < passwordLength; i++) {
//     finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)])
//   }

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');


// // Write password to the #password input
// function writePassword() {
//   optionsforPassword()
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');
//   var optionsforPassword = []
//   var finalPassword = []
//   var upper;
//   var lower;
//   var numbers;
//   var symbols;
//   var passwordLength = 0; 

//   passwordText.value = password;
  
//   console.log("optionsforPassword", passwordOptions);
//   for (var i = 0; i < passwordLength; i++) {
//     finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)])
//   }
//   console.log(finalPassword);
//   return finalPassword.join("");
// }
