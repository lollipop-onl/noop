/**
 * noop function
 */
const noop = (): void => {
  // do nothing
};

/**
 * noop function (lax types)
 * @param args accept any arguments
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const noopLax = (...args: any[]): any => {
  // do nothing
};

export { noopLax };
export default noop;
module.exports = noop;
