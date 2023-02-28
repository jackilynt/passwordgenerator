// Assignment code here

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var special = [  "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":"];
var numbers = new Array(1,2,3,4,5,6,7,8,9,0);
var userResponse = {} 

function optionsforPassword() {
  var range = prompt("How many characters are in your password?")
   if (range <8) {
    alert ("Password does not meet minimum requirements. Start Over.")
    return null;
   }

   if (range >128) {
    alert ("Password is too long. Start Over.")
    return null;
   }

   var lower = confirm ("Include lower case?")
   var upper = confirm ("Include upper case?")
   var numbers = confirm ("Include numbers?")
   var symbols = confirm ("Include symbols?")

   userResponse = {range,lower,upper,symbols}
   console.log = {userResponse}
};

optionsforPassword()
function generatePassword() {

}

// var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");
//     if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
//   alert("please enter a valid tag");
// } else

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
// Code here to create password
function generatePassword() {
  var generatePassword;
  for (var i = 0; i <= range; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
   document.getElementById("password").value = password;
  // password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length))
  return randomPassword;
}

var password=document.getElementById("password");

 function generatePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 8;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
  


// .addEventListener("click", function(event) {
  // event.preventDefault();

  
  