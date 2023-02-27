// Assignment code here

var result = document.querySelector("result");
var length = document.querySelector("length");
var lengthResult = document.querySelector("lengthResult");
var numbers = document.querySelector("numbers");
var characters = document.querySelector("characters");




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // var length = range 8-128
  var lower = ["abcdefghijklmnopqrstuvwxyz"];
  var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var special = ["~!@#$%^&*()_+=-`|{}:<>?/."];
  var numbers = ["1234567890"];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
