const moment = require('../index.js');
console.log('Speed test for 2000 characters');
console.log('Sample: The page of GNU General Public License in Wikipedia(English)');
console.log('https://en.wikipedia.org/wiki/GNU_General_Public_License');

const str = `
The GNU General Public License (GNU GPL or simply GPL) is a series of widely used free software licenses that guarantee end users the four freedoms to run, study, share, and modify the software.[7] The license was the first copyleft for general use and was originally written by the founder of the Free Software Foundation (FSF), Richard Stallman, for the GNU Project. The license grants the recipients of a computer program the rights of the Free Software Definition.[8] These GPL series are all copyleft licenses, which means that any derivative work must be distributed under the same or equivalent license terms. It is more restrictive than the Lesser General Public License and even further distinct from the more widely used permissive software licenses BSD, MIT, and Apache.

Historically, the GPL license family has been one of the most popular software licenses in the free and open-source software domain.[7][9][10][11][12] Prominent free software programs licensed under the GPL include the Linux kernel and the GNU Compiler Collection (GCC). David A. Wheeler argues that the copyleft provided by the GPL was crucial to the success of Linux-based systems, giving the programmers who contributed to the kernel the assurance that their work would benefit the whole world and remain free, rather than being exploited by software companies that would not have to give anything back to the community.[13]

In 2007, the third version of the license (GPLv3) was released to address some perceived problems with the second version (GPLv2) which were discovered during the latter's long-time usage. To keep the license up to date, the GPL license includes an optional "any later version" clause, allowing users to choose between the original terms or the terms in new versions as updated by the FSF. Developers can omit it when licensing their software; the Linux kernel, for instance, is licensed under GPLv2 without the "any later version" clause.[14][15] The "or any later version" clause also known as a lifeboat clause allows combinations between different versions of GPL licensed software to maintain compatibility. For example Inkscape is under the GPLv2 or any later version, but includes code under LGPLv3 or any later version, so effectively the binary as a whole is under the GPLv3 or any later version.[16]
`
console.time('Native replace-all');
const native_result = native_replace_all(str);
console.timeEnd('Native replace-all');

console.time('Moment replace-all');
const moment_result = moment_replace_all(str);
console.timeEnd('Moment replace-all');

if (native_result === moment_result) console.log('The result is correct');
else console.log('The result is not correct.\nNative: ' + native_result + '\n Moment: ' + moment_result);


function native_replace_all(str) {
    return str.replaceAll('GPL', 'GGPL');
};

function moment_replace_all(str) {
    return moment.replaceAll(str, 'GPL', 'GGPL');
};