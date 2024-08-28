/**
 * @module Cons
 */

import isCons from './is-cons.js';

/**
 * Asserts that the provided argument is a valid `cons` s-expression and throws a `ReferenceError` if it is not.
 *
 * This function checks whether the given argument is a valid `cons` s-expression using the `isCons` function.
 * If the argument is not a valid s-expression, an error is thrown with a detailed message that includes
 * the serialized form of the invalid argument.
 *
 * @param {*} maybeCons - The value to be checked, which can be of any type.
 *
 * @throws {ReferenceError} Throws an error if the provided argument is not a valid `cons` s-expression.
 *
 * @example
 * // Example of a valid cons s-expression
 * const sexp = cons(5, 'hello');
 *
 * // Asserting the cons s-expression, no error is thrown
 * assertCons(sexp);
 *
 * // Example of an invalid cons s-expression
 * const notSexp = { car: 5, cdr: 'hello' };
 *
 * // Asserting the non-s-expression, an error is thrown
 * assertCons(notSexp); // Throws ReferenceError: Argument must be a symbolic expression, but it was '{"car":5,"cdr":"hello"}'
 */
const assertCons = (maybeCons: any): void => {
  if (!isCons(maybeCons)) {
    const incorrectArg = JSON.stringify(maybeCons, null, 4);

    throw new ReferenceError(
      `Argument must be a symbolic expression, but it was '${incorrectArg}'`,
    );
  }
};

export default assertCons;
