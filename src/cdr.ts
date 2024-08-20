/**
 * @module Cdr
 */

import type { Cons } from './cons';
import assertCons from './guards/assert-cons';

/**
 * Internal unique message for `cdr`.
 */
export const cdrmsg = Symbol.for('@@cdr');

/**
 * Retrieves the second element of a `cons` cons (known as `cdr`).
 *
 * This function returns the `right` element of a cons created by the `cons` function. It ensures that
 * the provided argument is a valid `cons` cons before attempting to access the element.
 *
 * @template CAR - The type of the first element (left) of the cons.
 * @template CDR - The type of the second element (right) of the cons.
 *
 * @param {Cons<CAR, CDR>} cons - The `cons` cons from which to retrieve the second element.
 *
 * @returns {CDR} The second element (`cdr`) of the `cons` cons.
 *
 * @throws {ReferenceError} Throws an error if the provided argument is not a valid `cons` cons.
 *
 * @example
 * // Example usage
 * const sexp = cons(5, 'hello');
 *
 * // Retrieves the second element of the sexp
 * const hello = cdr(sexp); // 'hello'
 */
const cdr = <CAR, CDR>(cons: Cons<CAR, CDR>): CDR => {
  assertCons(cons);

  return cons(cdrmsg);
};

export default cdr;
