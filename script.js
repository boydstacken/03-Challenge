// Assignment Code
var generateBtn = document.querySelector("#generate");


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

    var lowerCase = confirm ("Do you want lowercase letters in your password?")
    var upperCase = confirm ("Do you want upper case characters in your password?")
    var numbersChoice = confirm ("Do you want numbers in your password?")
    var specialCharacters = confirm ("Do you want special characters in your password?")

    console.log(passwordLength)
    console.log(lowerCase)
    console.log(upperCase)
    console.log(numbersChoice)
    console.log(specialCharacters)

    return "Password created goes here";

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","Q","R","S","T","U","V","W","X","Y","Z"]
var specialCharacters = ["$", "!", "@", "?"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", ]
}

if(lowerCase === true) {
  possibleCharacters = possibleCharacters.concat(lowercase);
}
  if(upperCase === true) {
    possibleCharacters = possibleCharacters.concat(uppercase);
}
  if(numbersChoice === true) {
    possibleCharacters = possibleCharacters.concat(numbersChoice);
}
  if(specialCharacters === true) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
}
for(var i = 0; i <= passwordLength; i ++) {
  var randomNumber = Math.floor(Math.random( * lowerCase.length);
  password += lowerCase.substring(randomNumber, randomNimber +1)
}

// Write password to the #password input
function writePassword() {
  


//Utilizing Prompt for user input
if (specialCharacters) = (prompt("Password Length must be between 8 - 128 characters"));
if (passwordConditions < 8 || > 128 || 


 
  var passwordText = document.querySelector("#password");

document.querySelectorAll()


  passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

