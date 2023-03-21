// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
    console.log ("you clicked the button")

const passwordLength = document.getElementById
  ('passwordLength')
const characterAmount = document.getElementById
  ('characterAmount')

const form = document.getElementById("password")

characterLength.addEventListener("input", writePassword)
characterAmount.addEventListener("input", writePassword)

    return "Password created goes here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(includeLowercase, includeUppercase,
    includeNumbers, includeSpecialCharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

