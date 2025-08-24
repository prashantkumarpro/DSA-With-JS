function telephoneCheck(str) {
    const regex = / / 
  if (str.length < 10) {
    return false;
  }
  return true;
}

console.log(telephoneCheck("555 555 5555"))