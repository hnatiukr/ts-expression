/**
 * @module Cons
 */

import { carmsg } from './car.js';
import { cdrmsg } from './cdr.js';

/**
 * Constructs a `cons` sexp from two values, `car` and `cdr`.
 *
 * This function creates a symbolic expression that allows access to its `car` (first/left element) and `cdr` (second/right element)
 * using specific messages. The resulting s-expression is an immutable structure where `car` and `cdr` can be
 * accessed via the messages `CAR` and `CDR`, respectively.
 *
 * @template CAR - The type of the first element (left) of the s-expression.
 * @template CDR - The type of the second element (right) of the s-expression.
 *
 * @param {CAR} car - The first/left element of the s-expression.
 * @param {CDR} cdr - The second/right element of the s-expression.
 *
 * @returns {Cons<CAR, CDR>} A `cons` s-expression, which is a function that returns the `car` or `cdr`
 *   based on the provided message.
 *
 * @throws {Error} Throws an error if an unknown message is provided to the `cons` s-expression.
 *
 * @example
 * // Creating a sexp with a number and a string
 * const sexp = cons(5, 'hello');
 *
 * // Accessing the first element using `CAR`
 * const five = sexp(CAR); // 5
 *
 * // Accessing the second element using `CDR`
 * const hello = sexp(CDR); // 'hello'
 */
export type Cons<CAR, CDR> = {
  init: boolean;
  (message: typeof carmsg): CAR;
  (message: typeof cdrmsg): CDR;
};

/**
 * Constructs a `cons` sexp from two values, `car` and `cdr`.
 *
 * This function creates a symbolic expression that allows access to its `car` (first/left element) and `cdr` (second/right element)
 * using specific messages. The resulting s-expression is an immutable structure where `car` and `cdr` can be
 * accessed via the messages `CAR` and `CDR`, respectively.
 *
 * @template CAR - The type of the first element (left) of the s-expression.
 * @template CDR - The type of the second element (right) of the s-expression.
 *
 * @param {CAR} car - The first/left element of the s-expression.
 * @param {CDR} cdr - The second/right element of the s-expression.
 *
 * @returns {Cons<CAR, CDR>} A `cons` s-expression, which is a function that returns the `car` or `cdr`
 *   based on the provided message.
 *
 * @throws {Error} Throws an error if an unknown message is provided to the `cons` s-expression.
 *
 * @example
 * // Creating a sexp with a number and a string
 * const sexp = cons(5, 'hello');
 *
 * // Accessing the first element using `CAR`
 * const five = sexp(CAR); // 5
 *
 * // Accessing the second element using `CDR`
 * const hello = sexp(CDR); // 'hello'
 */
const cons = <CAR, CDR>(car: CAR, cdr: CDR): Cons<CAR, CDR> => {
  const sexp = (message: typeof carmsg | typeof cdrmsg) => {
    switch (message) {
      case carmsg:
        return car;
      case cdrmsg:
        return cdr;
      default:
        throw new Error(`Unknown constructor message '${message}'`);
    }
  };

  sexp.init = true;

  return sexp as Cons<CAR, CDR>;
};

export default cons;
