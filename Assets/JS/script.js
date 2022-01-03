// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
let passwordlength;
//get password length
passwordLength = parseInt(prompt("Please specify a password length atleast 8 to 128 characters"))
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Invalid password length entered")
  return ""
  //using parseInt to change string to value, as prompt returns a string
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
