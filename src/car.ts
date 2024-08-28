/**
 * @module Car
 */

import type { Cons } from './cons.js';
import assertCons from './guards/assert-cons.js';

/**
 * Internal unique message for `car`.
 */
export const carmsg = Symbol.for('@@car');

/**
 * Retrieves the first element of a `cons` s-expression (known as `car`).
 *
 * This function returns the `left` element of a s-expression created by the `cons` function. It ensures that
 * the provided argument is a valid `cons` s-expression before attempting to access the element.
 *
 * @template CAR - The type of the first element (left) of the s-expression.
 * @template CDR - The type of the second element (right) of the s-expression.
 *
 * @param {Cons<CAR, CDR>} cons - The `cons` s-expression from which to retrieve the first element.
 *
 * @returns {CAR} The first element (`car`) of the `cons` s-expression.
 *
 * @throws {ReferenceError} Throws an error if the provided argument is not a valid `cons` s-expression.
 *
 * @example
 * // Example usage
 * const sexp = cons(5, 'hello');
 *
 * // Retrieves the first element of the s-expression
 * const five = car(sexp); // 5
 */
const car = <CAR, CDR>(cons: Cons<CAR, CDR>): CAR => {
  assertCons(cons);

  return cons(carmsg);
};

export default car;
