const palindromes = function (string) {
    // let lowerCase = s.toLowerCase();
    // let desired = "";
    // for (let i = 0; i < s.length; i++) {
    //     if ((s.charAt(i) >= 97 && s.charAt(i) <= 122) || (s.charAt(i) >= 48 && s.charAt(i) <= 57)) {
    //         desired = desired + s.charAt(i);
    //     }
    // }

    // if (desired.split('').reverse().join('') === desired) {
    //     return true;
    // }
    // return false;
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
