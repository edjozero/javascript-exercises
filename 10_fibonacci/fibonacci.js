const fibonacci = function(num) {

    // changes string to number if a number is entered as a string
    if(typeof num === "string"){
        num = parseInt(num);
    }

    // stops negative numbers from being entered and returns error message
    if(num < 0){
        return "OOPS";
    }

    // create an if statement where if the argument entered to the function is less than 2, return the number they enter as the argument
    if(num < 2){
        return num;
    }else{
        // for the num entered over 2, we do the following to get the value of the provided num
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
