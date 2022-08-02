const moment = require('../index.js');
console.log('Speed test for 200 characters');
console.log('Sample: The page of GNU General Public License in Wikipedia(English)');
console.log('https://en.wikipedia.org/wiki/GNU_General_Public_License');

const str = 'The GNU General Public License (GNU GPL or simply GPL) is a series of widely used free software licenses that guarantee end users the four freedoms to run, study, share, and modify the software.';
console.time('Native replace-all');
const native_result = native_replace_all(str);
console.timeEnd('Native replace-all');

console.time('Moment replace-all');
const moment_result = moment_replace_all(str);
console.timeEnd('Moment replace-all');

if (native_result === moment_result) console.log('The result is correct');
else console.log('The result is not correct.\nNative: ' + native_result + '\n Moment: ' + moment_result);

function native_replace_all(str) {
    return str.replaceAll(' ', '');
};

function moment_replace_all(str) {
    return moment.replaceAll(str, ' ', '');
};