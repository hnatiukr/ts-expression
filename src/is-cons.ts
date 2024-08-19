/**
 * Checks if the provided argument is a `cons` symbolic expression.
 *
 * This function determines if the given value is a `cons` s-expression by checking if it is a function and has
 * a specific `init` property set to `true`. This property is used as a marker to identify `cons` s-expression,
 * which are functions with the `init` property indicating their construction.
 *
 * @param {*} maybeCons - The value to be checked. It can be of any type.
 *
 * @returns {boolean} `true` if the argument is a `cons` symbolic expression; otherwise, `false`.
 *
 * @example
 * // Example of a valid cons s-expression
 * const sexp = cons(5, 'hello');
 *
 * // Checking if it's a cons s-expression
 * const isValid = isCons(sexp); // true
 *
 * // Example of an invalid cons s-expression
 * const notSexp = { car: 5, cdr: 'hello' };
 *
 * // Checking if it's a cons s-expression
 * const isInvalid = isCons(notSexp); // false
 */
const isCons = (maybeCons: any): boolean => {
  return typeof maybeCons === 'function' && maybeCons?.init;
};

export default isCons;
