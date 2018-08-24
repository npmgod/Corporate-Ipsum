var words = require('./words');

// Adjustable variables
var defaultLength = 3;
var splitSentenceChance = 75;

// Get a random integer from 0 to the specified amount
function getRandom(amount) {
  return Math.floor(Math.random() * amount);
}

// Getting words from specified sections
function getWord(type) {
  var wordType = words[type];
  return wordType[getRandom(wordType.length)];
}

// Capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Generating the ipsum
function createIpsum(length) {
  var length = length || defaultLength;
  var string = '';
  var lastWasSplit = false;

  for (var i = 0; i < length; i++) {
    var isFullSentence = getRandom(100) < splitSentenceChance ? 1 : 0;
    var adverb = getWord('adverbs');
    var verb = getWord('verbs');
    var adjective = getWord('adjectives');
    var noun = getWord('nouns');

    // Capitalize first letter if needed
    if (!lastWasSplit) {
      adverb = capitalizeFirstLetter(adverb);
    }

    string += adverb + ' ';
    string += verb + ' ';
    string += adjective + ' ';
    string += noun;

    if (isFullSentence == 1 && i !== length - 1) {
      var transitional = getWord('transitionals');
      string += ', ' + transitional + ' ';
      lastWasSplit = true;
    } else {
      string += '. ';
      lastWasSplit = false;
    }
  }
  return string;
}

module.exports = createIpsum;
