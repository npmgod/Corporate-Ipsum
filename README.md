# Corporate-Ipsum
Bored of regular ol' Lorem Ipsum? Spice it up with this corporate filler text, and impress your clients/managers!  
Original words based on [https://www.atrixnet.com/bs-generator.html](https://www.atrixnet.com/bs-generator.html)

## Setup
`npm install corporate-ipsum`

## Usage

#### Syntax
```
import createIpsum from 'corporate-ipsum';

console.log(createIpsum());

/*
  Seamlessly extend progressive leadership skills. Uniquely generate scalable outsourcing, 
  then appropriately initiate top-line collaboration and idea-sharing.
*/
```

#### Length Argument
The createIpsum function takes one argument: `length`. Which is the length, in phrases, the ipsum is made of. The default is *3*.
```
console.log(createIpsum(10));
/*
  Enthusiastically productivate global scrums. Compellingly iterate 24/365 web-readiness, 
  then progressively empower cloud-based deliverables, and competently reintermediate 
  client-centered niches, to objectively integrate value-added e-tailers, then holisticly 
  brand optimal platforms. Uniquely unleash team driven paradigms, to proactively parallel 
  task progressive data, to objectively maximize orthogonal outsourcing. Uniquely target 
  cooperative collaboration and idea-sharing.
*/
```

## Contribution
* Clone this repo.
* Add some adverbs, verbs, adjectives, nouns, or transitionals to the `words.js` `word` array.
* Create a pull request.
