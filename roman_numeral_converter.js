// Roman Numeral Converter
// Convert the given number into a roman numeral.

// Roman Arabic 
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  let roman = "";
  // create an object with roman numerals as keys and arabic numbers as values
  let romanNumList = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  // declare variable to hold the number of times a roman numeral is repeated
  let a;

  // check if number is between 1 and 3999
  if (num < 1 || num > 3999) {
    return "Number must be between 1 and 3999.";
  }
  else {
    // loop through the romanNumList object
    for (let key in romanNumList) {
      // divide the input number by the arabic number and round down to get the number of times the roman numeral is repeated
      a = Math.floor(num / romanNumList[key]);
      // if the number of times the roman numeral is repeated is greater than 0, add the roman numeral to the roman string
      if (a >= 0) {
        // repeat the roman numeral the number of times it is repeated
        for (let i = 0; i < a; i++) {
          // add the roman numeral to the roman string
          roman += key;
        }
      }
      // subtract the arabic number from the input number
      num = num % romanNumList[key];
    }
  }
  return roman;
 }
 
 convertToRoman(36);