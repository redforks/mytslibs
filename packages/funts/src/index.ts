import { repeat, zipObj } from 'ramda';

export * from './actFuncs';

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer R> ? Array<DeepPartial<R>> : DeepPartial<T[K]>
};

/**
 * Alias of Extract<keyof T, string>.
 */
export type StringKeys<T> = Extract<keyof T, string>;

/**
 * Two items tuple has the same type.
 */
export type Twin<T> = [T, T];

/**
 * Sync or Async type of T
 */
export type AsyncOrSync<T> = T | Promise<T>;

/**
 * Remove readonly flags from all fields, make it mutable.
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * Turn to nullable type.
 *
 * Note: allow undefined value, if want only null nad value, use T | null directly.
 */
export type Nullable<T> = T | null | undefined;

/**
 * Each field of type T allows to be null.
 */
export type Nullish<T> = {
  [P in keyof T]: T[P] | null;
};

export function dump<T>(v: T): T {
  console.log(v);
  return v;
}

/**
 * Create an object with specified keys, with the same value.
 */
export function toKeyedObject<T>(v: T, keys: string[]): Record<string, T> {
  return zipObj(keys, repeat(v, keys.length));
}
