export * from './config';
export * from './strings';
export * from './date';

/**
 * Return a promise resolved after ms millisecond.
 * @param ms milliseconds to wait
 */
export async function delay<T>(ms: number, v?: T): Promise<T> {
  return new Promise(resolve => { setTimeout(() => { resolve(v); }, ms); });
}

/**
 * Returns a random unique guid string.
 */
export function guid(): string {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
