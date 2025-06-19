const findTheOldest = function(array) {
    return array.sort(
        (a, b) => {
            const date = new Date;
            currentYear = date.getFullYear();
            return ((b.yearOfDeath ? b.yearOfDeath : currentYear) - b.yearOfBirth) - ((a.yearOfDeath ? a.yearOfDeath : currentYear) - a.yearOfBirth);
        })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
