

const admZip = require('adm-zip');
const fs = require('fs');
const http = require('http');
const url = require('url');
const resolvePath = require('path').resolve;
const documentation = '\n\n\n Refer to documentation here: ' + 'https://github.com/austinyearlykim/ez-mtgjson \n\n';

const jsonMap = {
    allSets: 'https://mtgjson.com/json/AllSets.json.zip',
    allSetsX: 'https://mtgjson.com/json/AllSets-x.json.zip',
    allCards: 'https://mtgjson.com/json/AllCards.json.zip',
    allCardsX: 'https://mtgjson.com/json/AllCards-x.json.zip'
};


const ezMtgJson = module.exports = {};

ezMtgJson.download = function(options) {
    /*
        options = {
            target: 'allCards',                     //required
            filePath: '../../myFileName.json',      //optional     Will download to file if specified
            query: {                                //optional
                name: 'Jace Beleren',
                set: 'M10'
            },
            cache: false                            //optional
        }
    */
    validateOptions(options);
    const sourceUrl = jsonMap[options.target];
    const source = {
        host: url.parse(sourceUrl).host,
        port: 80,
        path: url.parse(sourceUrl).pathname
    };
    return new Promise((resolve, reject) => {
        http.get(source, (response) => {
            if (response.statusCode !== 200) {
                reject(mtgJsonUrl + ' returned a bad status code: ' + response.statusCode);
            }
            const bufferArray = []
            let bufferLength = 0;
            response
                .on('data', function (chunk) {
                    bufferArray.push(chunk);
                    bufferLength += chunk.length;
                })
                .on('end', function () {
                    const buffer = new Buffer(bufferLength);
                    for (let i = 0, length = bufferArray.length, position = 0; i < length; i++) {
                        bufferArray[i].copy(buffer, position);
                        position += bufferArray[i].length;
                    }
                    const zip = new admZip(buffer);
                    const zipEntries = zip.getEntries();
                    for (let x = 0; x < zipEntries.length; x++) {
                        const unzippedJson = zip.readAsText(zipEntries[x]);
                        if (options.filePath) {
                            fs.writeFileSync(resolvePath(options.filePath), unzippedJson);
                        }
                        resolve(unzippedJson);
                    }
                });
        });
    });
}

function validateOptions(options) {
    if (Array.isArray(options)) {
        throw new Error('Your options object is an ARRAY [] when it should be an OBJECT {}.' + documentation);
    }
    if (!options.target) {
        throw new Error('.download() requires a TARGET property on the options object.' + documentation);
    }
    const keys = Object.keys(jsonMap);
    const correctJsonString = keys.some((key, index) => {
        return key === options.target;
    });
    if (!correctJsonString) {
        throw new Error('.download() requires a specific string for the TARGET property.' + documentation);
    }
    if (options.filePath && typeof options.filePath !== 'string') {
        throw new Error('.download() requires the filePath to be of type string.  Your current filePath type is: ' + typeof options.filePath + documentation);
    }
}

function done(err, res) {
    return {
        done: (err, res) => {}
    };
}

// ezMtgJson
//     .download({ target: 'allCards', filePath: './asdf.js' })
//         .then((json) => { console.log(json); })
//         .catch((err) => { console.log(err); })
