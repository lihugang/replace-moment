const moment = require('../index.js');
const fs = require('fs');
console.log('Speed test for 100000 characters');
console.log('Sample: The page of GNU General Public License in Wikipedia(English)');
console.log('https://en.wikipedia.org/wiki/GNU_General_Public_License');

const str = fs.readFileSync('100000').toString();

console.time('Native replace-all');
const native_result = native_replace_all(str);
console.timeEnd('Native replace-all');

console.time('Moment replace-all');
const moment_result = moment_replace_all(str);
console.timeEnd('Moment replace-all');

if (native_result === moment_result) console.log('The result is correct');
else console.log('The result is not correct.\nNative: ' + native_result + '\n Moment: ' + moment_result);


function native_replace_all(str) {
    return str.replace('a', 'b');
};

function moment_replace_all(str) {
    return moment.replace(str, 'a', 'b');
};