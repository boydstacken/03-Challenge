// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","Q","R","S","T","U","V","W","X","Y","Z"]
var specialCharacters = ["$", "!", "@", "?"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8" ]
var possibleCharacters = []

function generatePassword() {
    console.log ("you clicked the button")
    var passwordLength = parseInt(prompt("How many characters would you like a for a password?"))
    if (passwordLength < 8 ){
      alert("Your password must be greater than 8 characters")
      return;
    }
      if (passwordLength > 128 ){
        alert("Your password must be less than 128 characters")
      return;
    }
console.log(passwordLength)
    var lowerCaseConfirm = confirm ("Do you want lowercase letters in your password?")
    var upperCaseConfirm = confirm ("Do you want upper case characters in your password?")
    var numbersConfirm = confirm ("Do you want numbers in your password?")
    var specialCharactersConfirm = confirm ("Do you want special characters in your password?")
    if(lowerCaseConfirm === true) {
      console.log(possibleCharacters)
    possibleCharacters = possibleCharacters +lowerCase
      console.log(possibleCharacters)
    }
   if(upperCaseConfirm === true) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    }
    if(numbersConfirm === true) {
    possibleCharacters = possibleCharacters.concat(numbers);
    }
    if(specialCharactersConfirm === true) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    }


  for (var i = 0; i < passwordLength; i++) {
    let randomValue = Math.floor(Math.random() * possibleCharacters.length);
    console.log(possibleCharacters[randomValue])
  }
    //for (var i = 0; i < randomPassword; i++) {
    //let randomPassword = passwordLength + possibleCharacters([randomValue].passwordLength);
    //randomPassword = randomPasswrd +  arr[randomValue]
  
  
  return possibleCharacters;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

