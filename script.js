// Assignment Code
var generateBtn = document.querySelector("#generate");



//Character Types
var special = ['!' , '@' , '#' , "$" , '%' , '^' , '&' , '*' , '(' , ')'];
var num = ['1' , '2' , '3' , '4' , '5' ,'6' , '7' , '8' , '9' , '0'];
var lower = ['a' , "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 'Z'];

//available for password
let avail = [] 


//Character Count between 8-128
var chrLimit = prompt("How many characters would you like your password to be?");

//Special Characters True/False
var specialChr = confirm("Do you want special characters in your password?");

//Number Characters True/False
var numChr = confirm("Do you want numbers in your password?");

//Lowercase True/False
var lowerChr = confirm("do you want lowercase letters in your password?");

//Uppercase True/False
var uppChr = confirm("Do you want uppercase letters in your password?");

//validates all variables are there prior to creating pw
console.log(chrLimit , specialChr , numChr , lowerChr);



//get variables for available array
if (specialChr){
  avail = avail.concat(special);
}

if (numChr){
  avail = avail.concat(num);
}
if(lowerChr){
  avail = avail.concat(lower);
}
if(uppChr){
  avail = avail.concat(lower);
}

//checking if the array for avail is getting populated
console.log(avail);


//take variables from above and pass into password
let password = []
while(password.length <= chrLimit){
  var rnd = Math.floor(Math.random()*avail.length);
  password.push(avail[rnd]);
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER







