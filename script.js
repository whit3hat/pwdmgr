//Character Types
var specialChr = ['!', '@', '#', "$", '%', '^', '&', '*', '(', ')' , '~' , '/' , '{' , "}" , '[' , ']' , '-' , '_'];
var numChr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowerChr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppChr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 'Z'];

//function to prompt for user password options
function getPasswordChoices() {

  //Character Count between 8-128
  var chrLimit = parseInt(prompt("How many characters would you like your password to be?"));

  //verify number from prompt
  if (isNaN(chrLimit) === true) {
    alert("You must enter a number.");
    return;
  }

  //verify length is 8 characters long.
  if (chrLimit < 8) {
    alert("Password must be greater than 8.");
    return;
  }
  //verify length is greater than 128
  if (chrLimit > 128) {
    alert("Password length must be less than 129 characters.");
    return;
  }

  //Special Characters True/False
  var hasSpecialChr = confirm("Do you want special characters in your password?");

  //Number Characters True/False
  var hasnumChr = confirm("Do you want numbers in your password?");

  //Lowercase True/False
  var haslowerChr = confirm("do you want lowercase letters in your password?");

  //Uppercase True/False
  var hasuppChr = confirm("Do you want uppercase letters in your password?");

  //validates all variables are there prior to creating pw
  console.log(chrLimit, hasSpecialChr, hasnumChr, haslowerChr, hasuppChr);

  //verify that 1 item is selected
  if (
    hasSpecialChr === false &&
    hasnumChr === false &&
    haslowerChr === false &&
    hasuppChr === false
  ) {
    alert("Must select at least one character type");
    return;
  }

  // variable to store input choices
  var avail = {
    chrLimit: chrLimit,
    hasSpecialChr: hasSpecialChr,
    hasnumChr: hasnumChr,
    haslowerChr: haslowerChr,
    hasuppChr: hasuppChr
  };
  
  return avail;
  //verify vail variable is created

}

//function for random element of array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// generate password with user input
function generatePassword() {
  var options = getPasswordChoices();
  
  // store pw as its created
  var result = [];
  
  //array to store types of characters to use in pw
  var possChrs = [];
  
  // array to store each of the chosen characters
  var guarnteedChr = [];
  console.log('first guarnteed characters array' , guarnteedChr);

  //adding choices of characters to the arrays from above
  //special Characters
  if (options.hasSpecialChr) {
    possChrs = possChrs.concat(specialChr);
    guarnteedChr.push(getRandom(specialChr));
  }
  //number Characters
  if (options.hasnumChr) {
    possChrs = possChrs.concat(numChr);
    guarnteedChr.push(getRandom(numChr));
  }
  //lowercase Characters
  if (options.haslowerChr) {
    possChrs = possChrs.concat(lowerChr);
    guarnteedChr.push(getRandom(lowerChr));
  }
  //upper Characters
  if (options.hasuppChr) {
    possChrs = possChrs.concat(uppChr);
    guarnteedChr.push(getRandom(uppChr));
  }
  //loop for number of characters required
  for (var i = 0; i < options.chrLimit; i++) {
    var possChr = getRandom(possChrs);

    result.push(possChr);

    console.log('possible character variable' , possChr);
    console.log(result);
  }

  //mix in guaranteed character in result
  for (var i = 0; i < guarnteedChr.length; i++) {
    result[i] = guarnteedChr[i];
  }
  console.log(guarnteedChr);
  //turn result into string to pass into write password var
  return result.join("");
}

//references for HTML
var copyBtn = document.querySelector("#copy");
var generateBtn = document.querySelector("#generate");

//write pw to #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  var passwordText = document.querySelector("#password");

  passwordText.select();
  document.execCommand("copy");

  alert(
    "Your password " + passwordText.value + " was copied to your clipboard."
  );
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);






