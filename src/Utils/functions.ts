/**
 *
 * @param {string} txt -The input text to be slices
 * @param {number} (max = 50) - the max length
 * @returns -the sliced text with an ...
 */
export function txtSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) return `${txt.slice(0, max)} ...`;
  else txt;
}
