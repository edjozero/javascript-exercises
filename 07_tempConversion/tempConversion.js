const convertToCelsius = function(fah) {
  // formula for F to C: C = 5/9 * (F - 32)
  let celsius = 5/9 * (fah - 32);
  return Math.round(celsius);
};

const convertToFahrenheit = function(cel) {
  // formula for C to F: (C * 9/5) + 32
  let fahrenheit = (cel * 9/5) + 32;
  return Math.round(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
