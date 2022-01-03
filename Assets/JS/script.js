// Assignment Code
var generateBtn = document.querySelector("#generate");

// this function is to randomly pick the variables, but also ensure that at least 1 variable is selected
function randomPickChar(text, numberChars = 1) {
  let randomString = "";

  for (let i = 0; i < numberChars; i++) {
    randomString += text.charAt(Math.floor(Math.random() * text.length));
  }

  return randomString;
}

function generatePassword() {
  //using let instead of var to ensure that the variables remain within the function and are not global
  let numberChars = "0123456789";
  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerChars = "abcdefghijklmnopqrstuvwxyz";
  let specialChars = `!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`;
  let charsToInclude = "";

  let passwordValue = "";

  let passwordLength;
  let includeLowerCase = false;
  let includeUpperCase = false;
  let includeNumeric = false;
  let includeSpecialCharacters = false;

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
  // using the function random picker to ensure the values are randonly picked
  // +=  is a concatenation,
  if (includeLowerCase) {
    charsToInclude += lowerChars;
    passwordValue += randomPickChar(lowerChars);
  }

  if (includeUpperCase) {
    charsToInclude += upperChars;
    passwordValue += randomPickChar(upperChars);
  }

  if (includeNumeric) {
    charsToInclude += numberChars;
    passwordValue += randomPickChar(numberChars);
  }

  if (includeSpecialCharacters) {
    charsToInclude += specialChars;
    passwordValue += randomPickChar(specialChars);
  }
  // the password lenth
  passwordValue += randomPickChar(
    charsToInclude,
    passwordLength - passwordValue.length
  );
  // noticed that gerenated password followed the variable listing, scrambling this to generate a stronger password

  passwordValue = randomPickChar(passwordValue, passwordValue.length);

  return passwordValue;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
