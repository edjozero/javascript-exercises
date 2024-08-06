const sumAll = function(...args) {
    // added variables for max, min and used spread operator for arguments
    let max = Math.max(args[0], args[1]);
    let min = Math.min(args[0], args[1]);

    let sum = 0;

    for(let i=min; i<=max; i++){
        // added last condition to satisfy test 5
        if(i < 0 || typeof i === "string" || !Number.isInteger(i)){
            return "ERROR";
        }else{
            sum += i;
        }
    }



    return sum;
};

// Do not edit below this line
module.exports = sumAll;
