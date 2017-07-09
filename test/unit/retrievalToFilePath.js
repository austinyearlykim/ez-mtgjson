const ezMtgJson = require('../../index.js');
const assert = require('assert');
const fs = require('fs');

describe('ezmtgjson -> file', function() {

    const path = '../../myjson.json';

    after((done) => {
        fs.unlinkSync(path);
        done();
    });

    it ('should be able to download and WRITE to file: AllCards JSON from https://mtgjson.com/', (done) => {
        ezMtgJson.download({
            target: 'allCards',
            filePath: path
        })
            .then((json) => {
                assert(json, 'was not able to retrieve json');
                assert(typeof json === 'object', 'json is of wrong type. should be an object.');
                assert(fs.existsSync(path), 'was not able to write json to file');
                done();
            })
            .catch((err) => {
                assert(!err, 'ERROR: ' + err);
                done();
            });
    }).timeout(10000);
});
