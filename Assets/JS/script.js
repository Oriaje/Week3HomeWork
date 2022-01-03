// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passwordlength;
  //get password length
  //using parseInt to change string to value, as prompt returns a string
  passwordLength = parseInt(
    prompt("Please specify a password length atleast 8 to 128 characters")
  );
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length entered");
    //using the next code line to remove the word undefined
    return "";
  }
  // setting the criteria for password

  includeLowerCase = confirm("Do you want to include lower case characters");

  includeUpperCase = confirm("Do you want to include upper case characters");

  includeNumeric = confirm("Do you want to include numeric characters");

  includeSpecialCharacters = confirm(
    "Do you want to include special characters"
  );
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
