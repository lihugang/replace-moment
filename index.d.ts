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