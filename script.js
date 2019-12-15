// Assignment Code
var generateBtn = document.querySelector("#generate");

//Must be between 8 and 128
var chrLimit

//Character Types
var specialChr = ['!' , '@' , '#' , "$" , '%' , '^' , '&' , '*' , '(' , ')']
var numChr = ['1' , '2' , '3' , '4' , '5' ,'6' , '7' , '8' , '9' , '0']
var lowerChr = ['a' , "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var UppChr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 'Z']

//Character Count between 8-128
var chrLimit = prompt("How many characters would you like your password to be?")

//Special Characters True/False
var specialChr = alert("Do you want special characters in your password?");

//Number Characters True/False
var numChr = alert("Do you want numbers in your password?");

//Lowercase True/False
var lowerChr = alert("do you want lowercase letters in your password?");

//Uppercase True/False
var uppChr = alert("Do you want uppercase letters in your password?");


//If Statements

if (specialChr === true ){
 specialChr[Math.floor(Math.random()*specialChr.length)];
}

if (numChr === true ) { 
  numChr[Math.floor(Math.random()*numChr.length)];
}

if (lowerChr === true ){
  lowerChr[Math.floor(Math.random()*lowerChr.length)];
}

if (UppChr === true) {
  UppChr[Math.floor(Math.random()*UppChr.length)];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  var copyToClipboard= document.getElementById(myInput);
  copyText.select();
  copyText.selectSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the password: " + copyText.value);   
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
