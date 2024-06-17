const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};

const multiply = function(a) {
  let total = 1;
  for (let i = 0; i < a.length; i++) {
    total *= a[i];
  }
  return total;
};

const power = function(a, b) {
  let total = a;
  for (let i = 1; i < b; i++) {
    total *= a
  }
  return total;
};

const factorial = function(a) {
  let total = 1;
  for (let i = a; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
