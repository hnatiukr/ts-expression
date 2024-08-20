import { expect, test, describe } from 'bun:test';

import { cons, car, cdr } from '../src';
import { assertCons } from '../src/guards';
import { toString } from '../src/operators';

describe('cons function', () => {
  test('should create a symbolic expression and access its elements', () => {
    const sexp = cons(3, 4);

    expect(car(sexp)).toBe(3);
    expect(cdr(sexp)).toBe(4);
  });
});

describe('toString function', () => {
  test('should return string representation of a simple symbolic expression', () => {
    const sexp = cons(10, -10);

    expect(toString(sexp)).toBe('(10, -10)');
  });

  test('should return string representation of a nested symbolic expression', () => {
    const sexp = cons(cons(3, 5), cons(1, null));

    expect(toString(sexp)).toBe('((3, 5), (1, null))');
  });

  test('should return string representation of a cons with nested constructors', () => {
    const sexp = cons(
      cons(cons([1], ['a', 'b']), cons(cons(1, 2), 'a')),
      cons({ key: 'value' }, { accessor: { readonly: true } }),
    );

    expect(toString(sexp)).toBe(
      '((([1], ["a","b"]), ((1, 2), "a")), ({"key":"value"}, {"accessor":{"readonly":true}}))',
    );
  });
});

describe('assertCons function', () => {
  test('should throw an error for non-symbolic expression inputs', () => {
    expect(() => assertCons(345)).toThrowError();
    expect(() => assertCons('asdf')).toThrowError();
    expect(() => assertCons({ key: 'value' })).toThrowError();
  });
});
