var specialcharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  ",",
  ".",
  "?",
  "/",
  "<",
  ">",
  "'",
  ":",
  ";",
];
var uppercasecharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercasecharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Assignment code here
function generatePassword() {
  // prompt user to enter a password length
  let length = parseInt(
    prompt(
      "how long do you want your password length? enter a number between 8-128"
    )
  );
  if (Number.isNaN(length)) {
    alert("must be a number");
    return null;
  }

  // 8 characters or less than 128
  if (length < 8 || length > 128) {
    // if less than 8 then give warning
    alert("invalid length please try again");
  }

  // ask user if they want number
  var oknumbers = confirm(
    "Do you want to include numbers?\nEither OK or Cancel."
  );
  // ask user if they want upper case letters
  var okuppercasecharacters = confirm(
    "Do you want to include uppercase characters?\nEither OK or Cancel."
  );
  // ask user if they want lower case letters
  var oklowercasecharacters = confirm(
    "Do you want to include lowercase characters?\nEither OK or Cancel."
  );
  // ask user if they want special characters
  var okspecialcharacters = confirm(
    "Do you want to include special character?\nEither OK or Cancel."
  );

  // if none is selected then tell user their input is invalid
  if (
    oknumbers === false &&
    okuppercasecharacters === false &&
    oklowercasecharacters === false &&
    okspecialcharacters === false
  ) {
    alert("you must include at least one of these characters types");
  }
  var acceptableCharacters = [];
  if (oknumbers) {
    acceptableCharacters = acceptableCharacters.concat(numbers);
  }
  if (okuppercasecharacters) {
    acceptableCharacters = acceptableCharacters.concat(uppercasecharacters);
  }
  if (oklowercasecharacters) {
    acceptableCharacters = acceptableCharacters.concat(lowercasecharacters);
  }
  if (okspecialcharacters) {
    acceptableCharacters = acceptableCharacters.concat(specialcharacters);
  }
  let generatepassword = "";

  for (let index = 0; index < length; index++) {
    let randomcharacter =
      acceptableCharacters[
        Math.floor(Math.random() * acceptableCharacters.length)
      ];
    generatepassword += randomcharacter;
  }
  return generatepassword;
}
// create an aray of valid characters
// choose ramdon chracters from the valid characters untill we get a password that is the specified length

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
