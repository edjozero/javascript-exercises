const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
	// let sum = 0;
  // args.forEach(el => sum += el);
  // return sum;

  // using reduce
  return args.reduce((total, item) => total + item, 0);
};

const multiply = function(args) {
  // let sum = 1;
  // args.forEach(el => sum *= el);
  // return sum;

  // use reduce
  return args.reduce((sum, item) => sum * item);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	if(num < 0){
    return -1;
  }else if(num === 0){
    return 1;
  }else{
    return (num * factorial(num -1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
