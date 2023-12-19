// Clicked "Generate Password" button prompts user password criteria
// Password must be 8-128 characters
// User decides on password criterias, there has to be at least 1 type 
// Password is generated based on users selected criteria 
// Displayed or Alerted

//Process:
//1. Click button
//2. Generate password criteria prompts
//3. Confirm selected criteria
//4. Generate password
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passwordCriteria = passwordPrompts();
  
}
//Prompts the user to confirm the criteria they would like included in their password
function passwordPrompts() {
  var askLength = prompt("Choose the length of password (must be 8 - 128 characters long)");
  var includeLowercase = confirm("Would you like to include lowercase letters in your password?");
  var includeUppercase = confirm("Would you like to include uppercase letters in your password?");
  var includeNumbers = confirm("Would you like to include numbers in your password?");
  var includeSpecial = confirm("Would you like to include special characters in your password?");
  // 
  var userChoices = [askLength, includeLowercase, includeUppercase, includeNumbers, includeSpecial];
  // console.log(askLength);
  // console.log(includeLowercase);
  // console.log(includeUppercase);
  // console.log(includeNumbers);
  // console.log(includeSpecial);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

