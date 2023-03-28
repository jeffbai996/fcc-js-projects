// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
  // set string to lowercase and remove all non-alphanumeric characters
  var str1 = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // reverse string and compare to original
  var str2 = str1.split("").reverse().join("");
  if (str1 !== str2) {
    return false;
  }
  // return true if strings are equal
  return true;
}

palindrome("eye");