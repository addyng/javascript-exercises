const reverseString = function(s) {
    // let outputString = "";
    // for (let i = s.length - 1; i >= 0; i--) {
    //     outputString += s.charAt(i);
    // }
    // return outputString;

    return s.split("").reverse().join("");
    // Odin solution splits the string into an array, reverses it, then joins together

};

// Do not edit below this line
module.exports = reverseString;
