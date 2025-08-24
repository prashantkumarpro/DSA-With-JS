/*
Roman Numeral Converter
Convert the given number into a roman numeral.
*/


function convertToRoman(num) {
  if (!Number.isInteger(num) || num <= 0) {
    console.log('Please enter a valid positive integer')
    return
  }

  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  const str = num.toString().padStart(4, '0'); // Ensures 4 digits

  const romanNumeral = 
    thousands[+str[str.length - 4]] +
    hundreds[+str[str.length - 3]] +
    tens[+str[str.length - 2]] +
    units[+str[str.length - 1]];

  return romanNumeral;
}

convertToRoman(3000); // MMMDCCCLXXXVIII

