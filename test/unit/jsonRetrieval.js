const ezMtgJson = require('../../index.js');
const assert = require('assert');

describe('www.mtgjson.com -> ezmtgjson', function() {

    it ('should be able to download AllCards JSON from https://mtgjson.com/', (done) => {
        ezMtgJson.download({ target: 'allCards' })
            .then((json) => {
                assert(json, 'was not able to retrieve json');
                assert(typeof json === 'object', 'json is of wrong type. should be an object.');
                done();
            })
            .catch((err) => {
                assert(!err, 'ERROR: ' + err);
                done();
            });
    }).timeout(10000);

    it ('should be able to download AllCardsX JSON from https://mtgjson.com/', (done) => {
        ezMtgJson.download({ target: 'allCardsX' })
            .then((json) => {
                assert(json, 'was not able to retrieve json');
                assert(typeof json === 'object', 'json is of wrong type. should be an object.');
                done();
            })
            .catch((err) => {
                assert(!err, 'ERROR: ' + err);
                done();
            });
    }).timeout(10000);

    it ('should be able to download AllSets JSON from https://mtgjson.com/', (done) => {
        ezMtgJson.download({ target: 'allSets' })
            .then((json) => {
                assert(json, 'was not able to retrieve json');
                assert(typeof json === 'object', 'json is of wrong type. should be an object.');
                done();
            })
            .catch((err) => {
                assert(!err, 'ERROR: ' + err);
                done();
            });
    }).timeout(10000);
    
    it ('should be able to download AllSetsX JSON from https://mtgjson.com/', (done) => {
        ezMtgJson.download({ target: 'allSetsX' })
            .then((json) => {
                assert(json, 'was not able to retrieve json');
                assert(typeof json === 'object', 'json is of wrong type. should be an object.');
                done();
            })
            .catch((err) => {
                assert(!err, 'ERROR: ' + err);
                done();
            });
    }).timeout(10000);

});
