# Replace Moment  
<font color=red>Notice: This project is used for researching.</font>  
<font color=red>Its speed is 3-5x slower than `String.prototype.replaceAll`. </font>
<font color=red>Maybe because the JavaScript parser is too slow. You can try using c++ to rewrite this project.</font>
### How to install it:  
`npm i replace-moment@1.0.0 --save`  
- - -
### How to use it:
```javascript
const { replace, replaceAll } = require('replace-moment');
const str = 'pig piggy';
console.log(replace(str, 'pig', 'dog'));
// 'dog piggy'
console.log(replaceAll(str, 'pig', 'dog'));
// 'dog doggy'
```
- - -
### Declares:
```typescript
/**
 * @function name: replace
 * @Description : replace sub-string in string
 * @Author      : lihugang
 * @param        {string} source
 * @param        {string} pattern
 * @param        {string | Function} replacement
 * @param        {number} startSearchPosition
 * @return       {string}
 * @Date        : 2022-08-02 14:22:12
 * @LastEditors : lihugang
 */
declare function replace(source: string, pattern: string, replacement: string | Function, startSearchPosition? : number): string;

/**
 * @function name: replaceAll
 * @Description : replace all sub-string in string
 * @Author      : lihugang
 * @param        {string} source
 * @param        {string} pattern
 * @param        {string | Function} replacement
 * @param        {number} startSearchPosition
 * @return       {string}
 * @Date        : 2022-08-02 14:22:12
 * @LastEditors : lihugang
 */
declare function replaceAll(source: string, pattern: string, replacement: string | Function, startSearchPosition?: number): string;
```
### LICENSE: MIT
### Join to this project: [replace-moment](https://github.com/lihugang/replace-moment)