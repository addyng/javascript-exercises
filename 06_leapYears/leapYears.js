const leapYears = function(year) {
    if (year < 0) {
        return "ERROR";
    }

    if (year % 4 === 0) {
        if (year % 100 === 0 && !(year % 400 === 0)) {
            return false;
        }
        if (year % 400 === 0) {
            return true;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;

// return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);