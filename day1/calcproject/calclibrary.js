"use strict";

// regular expression to find spaces. g - means global
const onlySpaces = /^[ ]*$/g

function sum(a, b) { 
  if (a == undefined || b == undefined) {
    throw new Error('parameter missing');
  }

  if (onlySpaces.test(a) || onlySpaces.test(b)) {
      throw new Error('only numbers are allowed');
  }

// it will cast it into a number
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
      throw new Error('only numbers are allowed');
  }
   return a + b;
};

function subtract(a, b) {
    if (a == undefined || b == undefined) {
        throw new Error('parameter missing');
      }
    
      if (onlySpaces.test(a) || onlySpaces.test(b)) {
          throw new Error('only numbers are allowed');
      }
    
    // it will cast it into a number
      if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
          throw new Error('only numbers are allowed');
      }
        return a - b;
}

function divide(a, b) {
    return a/b;
}

module.exports={sum, subtract, divide}