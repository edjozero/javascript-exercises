const sumAll = function(min, max) {
    // the following worked to satisfy test 1
    let sum = 0;

    // the condition in if statement is for some of remaining tests
    for(let i=min; i<=max; i++){
        if(i < 0 || typeof i === "string"){
            return "ERROR";
        }else{
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
