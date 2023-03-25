// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharacters = "$#@%&!"
var numbers = "0123456789"
var possibleCharacters = []

function generatePassword() {
  console.log("you clicked the button")
  var passwordLength = parseInt(prompt("How many characters would you like a for a password?"))
  if (passwordLength < 8) {
    alert("Your password must be greater than 8 characters")
    return;
  }
  if (passwordLength > 128) {
    alert("Your password must be less than 128 characters")
    return;
  }
  console.log(passwordLength)
  var lowerCaseConfirm = confirm("Do you want lowercase letters in your password?")
  var upperCaseConfirm = confirm("Do you want upper case characters in your password?")
  var numbersConfirm = confirm("Do you want numbers in your password?")
  var specialCharactersConfirm = confirm("Do you want special characters in your password?")
  if (lowerCaseConfirm === true) {
    console.log(possibleCharacters)
    possibleCharacters.push(lowerCase);
    console.log(possibleCharacters)
  }
  if (upperCaseConfirm === true) {
    possibleCharacters.push(upperCase);
  }
  if (numbersConfirm === true) {
    possibleCharacters.push(numbers);
  }
  if (specialCharactersConfirm === true) {
    possibleCharacters.push(specialCharacters);
  }

  let randomPassword = []
  let finalPassword = ""
  let newpossibleCharacters = possibleCharacters.join('')
  console.log(newpossibleCharacters)
  for (var i = 0; i < passwordLength; i++) {
    let randomValue = Math.floor(Math.random() * newpossibleCharacters.length);
    console.log(newpossibleCharacters[randomValue]);
    randomPassword.push(newpossibleCharacters.charAt(randomValue));
  finalPassword = randomPassword.join('')
  }
  //const = [upperCase,numbers,specialCharacters]
  //console.log(elements.push);


  //for (var i = 0; i < randomPassword; i++) {
  //let randomPassword = passwordLength + possibleCharacters([randomValue].passwordLength);
  //randomPassword = randomPasswrd +  arr[randomValue]

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

