import { assert, notNull } from '.';

test('assert', () => {
  assert(true);

  expect(() => { assert(false); }).toThrow('Assertion failed');
  expect(() => { assert(0, 'blah'); }).toThrow('Assertion failed: blah');
});

it('notNull', () => {
  expect(notNull(0)).toBe(0);
  expect(() => notNull(null)).toThrow('Expect not null value, but got null');
  expect(() => notNull(undefined)).toThrow(
    'Expect not null value, but got undefined');

  expect(() => notNull(null, 'foo')).toThrow('foo');
});
