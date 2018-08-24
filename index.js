var words = require('./words');

// Adjustable variables
var defaultLength = 3;

// Get a random integer from 0 to the specified amount
function getRandom(amount) {
  return Math.floor(Math.random() * amount);
}

// Getting words from specified sections
function getWord(type) {}

// Generating the ipsum
function createIpsum(length) {
  var length = length || defaultLength;
  var string = '';

  for (var i = 0; i < length; i++) {}
}

module.exports = createIpsum;
