[![Build Status](https://travis-ci.org/austinyearlykim/ez-mtgjson.svg?branch=master)](https://travis-ci.org/austinyearlykim/ez-mtgjson)
[![npm version](https://badge.fury.io/js/ez-mtgjson.svg)](https://badge.fury.io/js/ez-mtgjson)
# ez-mtgjson
Lightweight npm module to interact with Magic: The Gathering information from the famous https://mtgjson.com/.  

# Install
```sh
$ npm install ez-mtgjson
```

# Example
```
const ezmtgjson = require('ez-mtgjson');

ezmtgjson
    .download({ target: 'allCards' })
        .then((json) => { console.log(json); })
        .catch((err) => { console.log(err); })
```

# Documentation
Available methods:
| Methods | Description |
| ------ | ------ |
| .download(OPTIONS_OBJECT) | Downloads JSON and returns it in a promise |

The OPTIONS_OBJECT:
| Properties | Description | Type | Specific Values |
| ------ | ------ | ------ | ------ |
| target | Downloads JSON and returns it in a promise | String | allCards, allCardsX, allSets, allSetsX
| filePath | Downloads JSON and saves it to a relative file path (also returns JSON in promise) | String
| cache | COMING_SOON | Boolean
| queryFromCache | COMING_SOON | Object
| clearCache | COMING_SOON | Boolean

### Todos
 - Add a neato-bandito Travis-CI badge
 - Able user to query for a specific card
 - Able user to query for all cards in a specific set
 - Able user to filter by cmc, color, etc.

### Have a question or an issue?
Submit an issue: https://github.com/austinyearlykim/ez-mtgjson/issues

Issues will be responded to within a day.

License
----
Copyright 2017 Austin Yearly Kim

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
