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

// Generating the ipsum
function createIpsum(length) {
  var length = length || defaultLength;
  var string = '';

  for (var i = 0; i < length; i++) {
    var isFullSentence = getRandom(100) < splitSentenceChance ? 1 : 0;
    var adverb = getWord('adverbs');
    var verb = getWord('verbs');
    var adjective = getWord('adjectives');
    var noun = getWord('nouns');

    string += adverb + ' ';
    string += verb + ' ';
    string += adjective + ' ';
    string += noun;

    if (isFullSentence == 1 && i !== length - 1) {
      var transitional = getWord('transitionals');
      string += ', ' + transitional + ' ';
    } else {
      string += '. ';
    }
  }
  return string;
}

for (var i = 0; i < 10; i++) {
  console.log('');
  console.log('-----');
  console.log('');
  console.log(createIpsum(10));
}

module.exports = createIpsum;
