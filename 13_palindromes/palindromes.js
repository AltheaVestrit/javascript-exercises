const palindromes = function (str) {
    const filteredStr = str.
        toLowerCase().
        replace(/[^a-z0-9]/g, "");
    
    console.log(filteredStr);

    return filteredStr === filteredStr.
        split("").
        reverse().
        join("");
};

// Do not edit below this line
module.exports = palindromes;
