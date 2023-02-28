// Assignment code here
var userResponse = {}
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var special = [  "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":"];
var numbers = new Array(1,2,3,4,5,6,7,8,9,0);

function optionsforPassword() {
  var range = prompt("How many characters are in your password?")
   if (range <8) {
    alert ("Password does not meet minimum requirements")
    return null;
   }
   
   if (range >128) {
    alert ("Password is too long")
    return null;
   }

   var lower = confirm ("Include lower case?")
   var upper = confirm ("Include upper case?")
   var numbers = confirm ("Include numbers case?")
   var symbols = confirm ("Include symbols case?")
};

optionsforPassword()

function generatePassword() {
  userResponse = {range, lower, upper,numbers, symbols}
  
}


var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else 


//store user response in an object javascripts objects
//create random password generator math random
//function the generate password to put it all together



// var result = document.querySelector("result");
// var length = document.querySelector("length");
// var lengthResult = document.querySelector("lengthResult");
// var numbers = document.querySelector("numbers");
// var characters = document.querySelector("characters");
// var caps = document.querySelector("caps");
// var checkbox = document.querySelector("checkbox")

// document.addEventListener('DOMContentLoaded', (event) => {

// onDOMContentLoaded = (event) => { };

// // document.addEventListener("DOMContentLoaded", () => {

//   length = 128;
//   lengthResult.innerText = 128;
//   let onLoadLength = passLength.value;
//   let onLoadNumbers = includeNumbers.checked;
//   let onLoadSymbols = includeSymbols.checked;
//   result.value = generatePassword(onLoadNumbers, onLoadSymbols, onLoadLength);

// });

// length.addEventListener("change", (event) => {
//   lengthResult.innerText = event.target.value;

// });

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  optionsforPassword()
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


.addEventListener("click", function(event) {
  event.preventDefault();
