const repeatString = function(string, num) {
    let repeatedString = "";
    for (let i = 0; i < num; i++) {
        repeatedString += string;
    }

    if(num < 0){
        repeatedString += "ERROR";
        return repeatedString;
    }else{
        return repeatedString;
    }

    // return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
