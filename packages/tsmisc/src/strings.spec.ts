import { insertAt, randomString } from './strings';

it('insertAt', () => {
  expect(insertAt('', 0, '')).toBe('');
  expect(insertAt('', 100, 'a')).toBe('a');
  expect(insertAt('123', 0, 'a')).toBe('a123');
  expect(insertAt('123', 3, 'a')).toBe('123a');
  expect(insertAt('123', 1, 'a')).toBe('1a23');
  expect(insertAt('123', 10, 'a')).toBe('123a');
});

it('randomString', () => {
  const s1 = randomString();
  const s2 = randomString();
  expect(s1).not.toEqual(s2);
  expect(s1.length).toBeGreaterThanOrEqual(10);
  expect(s2.length).toBeGreaterThanOrEqual(10);
});
