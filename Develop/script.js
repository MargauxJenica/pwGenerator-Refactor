// Clicked "Generate Password" button prompts user password criteria
// Password must be 8-128 characters
// User decides on password criterias, there has to be at least 1 type 
// Password is generated based on users selected criteria 
// Displayed or Alerted


// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-=+[]{}|:;<.>/?";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
