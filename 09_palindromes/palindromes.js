const palindromes = function (string) {
    // compare a string to its reversed self
    let strArr = string.split("").reverse().join("");

    if(string === strArr){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
