/**
 * @module Cons
 */

import car from '../car';
import cdr from '../cdr';
import type { Cons } from '../cons';
import isCons from '../guards/is-cons';
import assertCons from '../guards/assert-cons';

const stringify = <CAR, CDR>(maybeCons: CAR | CDR): string => {
  return isCons(maybeCons) ? toString(maybeCons as Cons<any, any>) : JSON.stringify(maybeCons);
};

/**
 * Converts a `cons` s-expression into its string representation, handling nested `cons` s-expression recursively.
 *
 * This function generates a string representation of a `cons` s-expression by retrieving its `car` and `cdr`
 * elements, converting them to strings using `JSON.stringify`, and formatting them in a tuple-like format.
 * If either `car` or `cdr` is a nested `cons` s-expression, the function will recursively convert those elements
 * to strings as well.
 *
 * @template CAR - The type of the first element (head) of the s-expression.
 * @template CDR - The type of the second element (tail) of the s-expression.
 *
 * @param {Cons<CAR, CDR>} cons - The `cons` s-expression to be converted to a string.
 *
 * @returns {string} A string representation of the `cons` s-expression, including nested s-expressions, in the format `(head, tail)`.
 *
 * @throws {ReferenceError} Throws an error if the provided argument is not a valid `cons` s-expression.
 *
 * @example
 * // Example usage
 * const sexp = cons(cons(1, 2), cons('hello', 'world'));
 *
 * // Convert the nested s-expression to a string
 * const str = toString(sexp); // "((1, 2), ("hello", "world"))"
 */
const toString = <CAR, CDR>(cons: Cons<CAR, CDR>): string => {
  assertCons(cons);

  const stringifiedCar = stringify(car(cons));
  const stringifiedCdr = stringify(cdr(cons));

  return `(${stringifiedCar}, ${stringifiedCdr})`;
};

export default toString;
