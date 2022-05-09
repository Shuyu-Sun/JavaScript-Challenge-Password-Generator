// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword(){

  var charsset = "";
  var passwordlength = window.prompt ("Choose the length of password (at least 8 characters and no more than 128 characters):");

  if (passwordlength >=8 && passwordlength <=128) {
    var lowercase = window.prompt('Do you want to include lowercase letters? Enter "Yes" or "No" ');
    if (lowercase == "Yes") {
      charsset += "abcdefghijklmnopqrstuvwxyz";
    }

    var uppercase = window.prompt('Do you want to include uppercase letters? Enter "Yes" or "No" ');
    if (uppercase == "Yes") {
      charsset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    var numeric = window.prompt('Do you want to include numbers? Enter "Yes" or "No" ');
    if (numeric == "Yes") {
      charsset += "0123456789";
    }

    var specialcharacters = window.prompt('Do you want to include special characters? Enter "Yes" or "No" ');
    if (specialcharacters == "Yes") {
      charsset += "!@#$%'()*+,-./:;<=>?@[\]^_`{|}~";
    }

    if (lowercase == "No" && uppercase == "No" && numeric == "No" && specialcharacters == "No"){
      window.alert("At least one character type should be selected.");
      return generatePassword();
    }

  else {

    for (var i = 0; i <= passwordlength; i++) {
      var randomNumber = Math.floor(Math.random() * charsset.length);
      password += charsset.substring(randomNumber, randomNumber +1);
    }

  }
  passwordText.value = password;

  return password;
  
  }
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  }

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);