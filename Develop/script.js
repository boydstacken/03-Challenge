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

    var lowerCase = prompt("Do you want lowercase letters in your password?")
    var numbers = prompt("Do you want numbers in your password?")
    var specialCharacters = prompt("Do you want special characters in your password?")

    return "Password created goes here";

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","Q","R","S","T","U","V","W","X","Y","Z"]
var specialCharacters = ["$"]
var numbers = [8]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //testing to see if it works//
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
  //updated

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

