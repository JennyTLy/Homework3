// Assignment Code
var generateBtn = document.querySelector("#generate");

//below is a sequence of prompts that will instruct the user to select options
var standardChar = "abcdefghijklmnopqrstuvxyz1234567890"


//prompt user to select password length and validate length otherwise prompt user to select again.

let charLength = parseInt (prompt("For your auto-generated password, please select a length between 8 and 128 characters."));
while(charLength < 8 || charLength> 128 || typeof(charLength) != "number" || charLength === NaN || charLength === null){
  alert("For your auto-generated password, please select a length between 8 and 128 characters.");
  charLength = parseInt(prompt("Please enter the length of characters you'd like for your password.  The password must be a minimum of 8 and a maximum of 128 characters."));
}

//prompt user to select if they'd like to use uppercase letters in their password
var upperCaseChoice = prompt("Would you like to include uppercase letters? Please type 'yes' for yes or 'no' for no")

//prompt user to select if they'd like to use special characters in their password
var specialCharChoice = prompt("Would you like to include special characters in your password? Please type 'yes' for yes or 'no' for no")

//console log password length response
console.log("Password Length: " + charLength);

//console log uppercase usage response
console.log("Include Uppercase: " + upperCaseChoice);

//console log special character response
console.log("Include Special Characters: " + specialCharChoice)


//validating user choices

//validating uppercase response
function upperValidation(){

    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(upperCaseChoice === 'yes'){
        return upperCase
      }else{
        return;
      }

};

//validating special character response
function specialValidation(){
  var specialCharacters = "!@#$%^&*()+=";
  if (specialCharChoice === 'yes'){
    return specialCharacters;
  }else{
    return;
  }

}


//combining variables for user choices and standard char 
var result = upperValidation() + specialValidation() + standardChar;

//console logging the result
console.log("Characteer Set: " + result);

function generatePassword(){
  var retVal = "";
  for(i=0, n =result.length; i < charLength; i++){
    retVal += result.charAt(Math.floor(Math.random() *n))
  }
  return retVal;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
