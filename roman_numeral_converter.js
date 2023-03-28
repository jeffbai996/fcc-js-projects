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
    for (let key in romanNumList) {
      a = Math.floor(num / romanNumList[key]);
      if (a >= 0) {
        for (let i = 0; i < a; i++) {
          roman += key;
        }
      }
      num = num % romanNumList[key];
    }
  }
  return roman;
 }
 
 convertToRoman(36);