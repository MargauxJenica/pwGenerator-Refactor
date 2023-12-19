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
var checkLowercase;
var checkUppercase;
var checkNumber;
var checkSpecialChar;

// Write password to the #password input
function writePassword() {
  event.preventDefault();
  //calls to generatePassword and then assigns value/content to password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// This function will create the password
function generatePassword() {
  // before generating password, user is prompted to select password criterias to include in their password
  // calls passwordPrompts
  var passwordCriteria = passwordPrompts();
 

  
}
//Prompts the user to confirm what they would like included in their password
function passwordPrompts() {
  var passwordLength = prompt("Choose the length of password (must be 8 - 128 characters long)");
  checkLength(passwordLength);

  var askLowercase = confirm("Would you like to include lowercase letters in your password?");
  var askUppercase = confirm("Would you like to include uppercase letters in your password?");
  var askNumbers = confirm("Would you like to include numbers in your password?");
  var askSpecial = confirm("Would you like to include special characters in your password?");
  //put the user's selection into an array userChoice
  var userChoice = [askLowercase, askUppercase, askNumbers, askSpecial];
  
  //call approvedChoices and sending the userChoice array as an argument
  approvedChoices(userChoice);
}

// Checks user's input for passwordLength
function checkLength(passwordLength){
  //Checking for correct length criteria
  if (passwordLength < 8 || passwordLength > 128){
    alert("Invalid Length, Try Again.\n\nPlease choose a password length between 8 to 128 characters. ");
    //Starts over passwordPrompts function
    passwordPrompts();
  }
  else{
    //continues where passwordPrompts function left off 
    return Promise.resolve();
  }
}

function approvedChoices(userChoice){
  // Checks if user did not pick any criterias for password
   if(!userChoice.some(Boolean)){
    // user will be prompted to start over
    alert("Try Again. You must choose at least one criteria for password.");
    passwordPrompts();
   }
   else{
      //checking if user wants to include lowercase letters
      if(userChoice[0] === true){
        askLowercase = true;
        console.log(askLowercase);
      }
      else{
        askLowercase = false;
        console.log(askLowercase);
      }
      if(userChoice[1] === true){
        askUppercase = true;
        console.log(askUppercase);
      }
      else{
        askUppercase = false;
        console.log(askUppercase);
      }
      if(userChoice[2] === true){
        askNumbers = true;
        console.log(askNumbers);
      }
      else{
        askNumbers = false;
        console.log(askNumbers);
      }
      if(userChoice[3] === true){
        askSpecial = true;
        console.log(askSpecial);
      }
      else{
        askSpecial = false;
        console.log(askSpecial);
      }
    }
}


// Add event listener to generate button
// This will call writePassword function
generateBtn.addEventListener("click", writePassword);

