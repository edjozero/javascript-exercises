const sumAll = function(min, max) {
    // if min is a bigger number than max
    if(min > max){
        [min, max] = [max, min];
    }

    // ensures that only integers can be used as arguments
    if(!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR";
    }

    // stops the use of negative numbers
    if(min < 0 || max < 0){
        return "ERROR";
    }

    // the code for adding sum of all numbers between min and max
    let sum = 0;

    for(let i=min; i<=max; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
