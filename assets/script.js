//Arrays for each possible choice
var charAlpha = [];
var charLower = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "{", "}", ".", "[", "]", ",", "/", ":", "'", "<", "?", ">", ";", "="];
var password = generatePassword();
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");


// Grab the users choice - create a function that will prompt the user with their options
 ///// chars set - upper or lower case - interger option - special char
// Condtioanl statements - confrim user choice 
function askMe () {
    var passwordLength = parseInt(
     prompt("How many characters would you like your password to contain?");
    );

    // Conditional - will check the user input 
    if(isNaN(passwordLength) === true){
        alert("Type a character length between 8 - 128 characters.")
    }
    if (passwordLength < 8){
        alert ('Password length must be more than 8 characters.')
    }
    if (passwordLength > 128) {
         alert('Password length must be lower than 128 characters.')
    };
    //  Confirms -
};
function generatePassword() {
    var charAlpha = confirm(
        "Click OK to confirm including letters."
    );
    var charNum = confirm(
        "Click OK to confirm including numbers."
    );
    var charSpecial = confirm(
        "Click OK to confirm including special characters."
    );
    var charUpper  = confirm(
        "Click OK to confirm including uppercase letters."
    );
    var charLower = confirm(
        "Click OK to confirm including lowercase letters."
    );
    
    if (charNum) {
        charAlpha = charAlpha.concat(charNum);
    }
    if (charSpecial) {
        charAlpha = charAlpha.concat(charSpecial);
    }
    if (charUpper) {
        charAlpha = charAlpha.concat(charUpper);
    }
    if (charLower) {
        charAlpha = charAlpha.concat(charLower);
    }
    if (charNum) {
      charAlpha += charNum;
    }
    if (charSpecial) {
      charAlpha += charSpecial;
    }
    if (charUpper) {
      charAlpha += charUpper;
    }
    if (charLower) {
      charLower += charLower;
    }
}

// 4. Create  a random function  - 
function random() {
  var passwordLength = 
  for (var i = 0; i < 128; i++) {
    var charNum = Math.floor(Math.random() * 128) + 1;
    console.log("charNum");
    return "This will be replaced by my generated password.";


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
