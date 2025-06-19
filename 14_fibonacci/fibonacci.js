const fibonacci = function (num) {
    num = parseInt(num);
    if (num >= 0) {
        return Math.round(((1 + Math.sqrt(5)) / 2) ** num / Math.sqrt(5));
    } else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
