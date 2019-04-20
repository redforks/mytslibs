
/**
 * insert substring at the specific position
 *
 * @export
 * @param {string} s
 * @param {number} idx
 * @param {string} sAdd string to add
 * @returns {string}
 */
export function insertAt(s: string, idx: number, sAdd: string): string {
  return s.substr(0, idx) + sAdd + s.substr(idx);
}

/**
 * Removes a substring of a specified length at a specific
 * index in a string.
 * @param {string} s The base string from which to remove.
 * @param {number} index The index at which to remove the substring.
 * @param {number} stringLength The length of the substring to remove.
 * @return {string} A copy of {@code s} with the substring removed or the full
 *     string if nothing is removed or the input is invalid.
 */
export function removeAt(s: string, index: number, stringLength: number): string {
  let resultStr = s;
  // If the index is greater or equal to 0 then remove substring
  if (index >= 0 && index < s.length && stringLength > 0) {
    resultStr =
      s.substr(0, index) +
      s.substr(index + stringLength, s.length - index - stringLength);
  }
  return resultStr;
}

/**
 * Returns a string with at least 64-bits of randomness.
 *
 * Doesn't trust JavaScript's random function entirely. Uses a combination of
 * random and current timestamp, and then encodes the string in base-36 to
 * make it shorter.
 *
 * Returns a random string.
 */
export function randomString(): string {
  const x = 2147483648;
  return Math.floor(Math.random() * x).toString(36) +
    // tslint:disable-next-line:no-bitwise
    Math.abs(Math.floor(Math.random() * x) ^ Date.now()).toString(36);
}
