const kmp = require('./dependencies/kmp');

const replace = function (source, pattern, replacement, startSearchPosition = 0) {
    if (typeof source !== 'string') throw new Error('source must be a string');
    if (typeof pattern !== 'string') throw new Error('pattern must be a string');
    if (typeof replacement !== 'string' && !(replacement instanceof Function)) throw new Error('replacement must be a string');
    if (typeof startSearchPosition !== 'number') throw new Error('startSearchPosition must be a number');
    const result = [source.substring(0, startSearchPosition)];

    source = source.substring(startSearchPosition);

    const matchPosition = kmp(source, pattern);
    if (matchPosition === -1) return source;

    //add the string before the match position to the result
    result.push(source.substring(0, matchPosition));

    //add replacement
    if (typeof replacement === 'string')
        result.push(replacement);
    else result.push(replacement(pattern, matchPosition, source));

    //add the string after pattern
    result.push(source.substring(matchPosition + pattern.length));
    return result.join('');
};

const replaceAll = function (source, pattern, replacement, startSearchPosition = 0) {
    if (typeof source !== 'string') throw new Error('source must be a string');
    if (typeof pattern !== 'string') throw new Error('pattern must be a string');
    if (typeof replacement !== 'string' && !(replacement instanceof Function)) throw new Error('replacement must be a string');
    if (typeof startSearchPosition !== 'number') throw new Error('startSearchPosition must be a number');

    const result = [source.substring(0, startSearchPosition)];

    let matchPosition;
    do {
        source = source.substring(startSearchPosition);

        matchPosition = kmp(source, pattern);
        if (matchPosition === -1) {
            result.push(source);
            return result.join('');
        };

        //add the string before the match position to the result
        result.push(source.substring(0, matchPosition));

        //add replacement
        if (typeof replacement === 'string')
            result.push(replacement);
        else result.push(replacement(pattern, matchPosition, source));

        startSearchPosition = matchPosition + pattern.length; //reset

    } while (matchPosition !== -1);
    return result.join('');
};

module.exports = {
    replace: replace,
    replaceAll: replaceAll
};