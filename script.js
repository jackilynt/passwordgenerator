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
  var passwordLength = 0;


  var length = prompt("How many characters are in your password minimum 8 maximum 128?");
    if (length < 8 || length > 128) {
    alert("Password does not meet minimum requirements. Start Over.");
    return null;
  }

  if (length === undefined) {
    alert("Password does not meet minimum requirements. Start Over.");
    return "The Password";
  }

  var pwdUpperCase = confirm("Include upper case?");
  var pwdLowerCase = confirm("Include lower case?");
  var pwdNumbers = confirm("Include numbers?");
  var pwdSpecial = confirm("Include symbols?");

  if(!upper && !lower && !numbers && !special){
    alert("Password does not meet minimum requirements. Start Over.");
    return null;
  }
  if (upper) {
    passwordOptions = passwordOptions.concat(pwdUpperCase);
  }
  if (lower) {
    passwordOptions = passwordOptions.concat(pwdLowerCase);
  }
  if (numbers) {
    passwordOptions = passwordOptions.concat(pwdNumbers);
  }
  if (special) {
    passwordOptions = passwordOptions.concat(pwdSpecial);
  }

  console.log("passwordOptions", passwordOptions);

  for (var i = 0; i < passwordLength; i++) {
    finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
  }

  console.log(finalPassword);

  return finalPassword.join("");

}



