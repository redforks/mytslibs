export function assert(test: any, message?: string) {
  if (!test) {
    fail(message);
  }
}

export function fail(message?: string): never {
  const prefix = 'Assertion failed';
  throw Error(message ? `${prefix}: ${message}` : prefix);
}

export function notNull<T>(v: T | null | undefined, message?: string): T {
  if (v == null) {
    throw Error(message || `Expect not null value, but got ${v}`);
  }
  return v;
}
