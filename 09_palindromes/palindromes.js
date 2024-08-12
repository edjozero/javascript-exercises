const palindromes = function (string) {
    // compare a string to its reversed self
    // let strArr = string.split("").reverse().join("");

    // if(string === strArr){
    //     return true;
    // }else{
    //     return false;
    // }

    // use regex to remove characters we dont want in original string to make it easy to compare to its reversed version
    let excludedItems = /[^a-zA-Z0-9]/g;

    const cleanStr = string.replace(excludedItems, "").toLowerCase();
    
    const reverseStr = cleanStr.split("").reverse().join("");

    return cleanStr === reverseStr;
    
};

// Do not edit below this line
module.exports = palindromes;
