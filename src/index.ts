/**
 * noop function
 */
const noop = (): void => {};

/**
 * noop function (lax types)
 * @param args accept any arguments
 */
const noopLax = (...args: any[]): any => {};

export { noopLax };
export default noop;
module.exports = noop;
