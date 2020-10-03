// Assignment Code
var generateBtn = document.querySelector("#generate");

//below is a sequence of prompts that will instruct the user to select options
var standardChar = "abcdefghijklmnopqrstuvxyz1234567890"

//prompt to select password length
var charLength = prompt("For your auto-generated password, please select a lengeth between 8 to 15")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
