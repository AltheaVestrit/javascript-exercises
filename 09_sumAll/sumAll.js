const sumAll = function (start, end) {
    if (Number.isInteger(start) && Number.isInteger(end) && start >= 0 && end >= 0) {
        let finalSum = 0;
        for (i = Math.min(start, end); i <= Math.max(start, end); i++) {
            finalSum += i;
        }
        return finalSum;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;
