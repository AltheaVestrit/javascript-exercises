const repeatString = function (string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let returnString = "";
    for (i = 0; i < num; i++) {
        returnString += string;
    }
    return returnString;
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
