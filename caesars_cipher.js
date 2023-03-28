// Caesars Cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  // create an array of the alphabet
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // create an array of the ciphered alphabet
  let cipher = "NOPQRSTUVWXYZABCDEFGHIJKLM".split("");
  // create an array of the input string
  let input = str.split("");
  // create an array to hold the decoded string
  let decoded = [];
  // loop through the input string
  for (let i = 0; i < input.length; i++) {
    // check if the character is a letter
    if (alphabet.indexOf(input[i]) !== -1) {
      // if it is, find the index of the character in the alphabet array
      let index = alphabet.indexOf(input[i]);
      // push the character at the same index in the cipher array to the decoded array
      decoded.push(cipher[index]);
    } else {
      // if it is not a letter, push the character to the decoded array
      decoded.push(input[i]);
    }
  }
  // join the decoded array into a string and return it
  str = decoded.join("");
  return str;
}

rot13("SERR PBQR PNZC");