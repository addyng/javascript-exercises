const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }

    let sum = 0;
    let temp = 0;
    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

// const sumAll = function (min, max) {
//     if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//     if (min < 0 || max < 0) return "ERROR";
//     if (min > max) {
//       const temp = min;
//       min = max;
//       max = temp;
//     }
  
//     // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
//     // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
//     // if (min > max) [min, max] = [max, min];
    
//     let sum = 0;
//     for (let i = min; i <= max; i++) {
//       sum += i;
//     }
//     return sum;
//   };