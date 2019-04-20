/**
 * Returns today date object.
 *
 * Timezone is current local time.
 *
 * @returns date of today with time part be zero.
 */
export function today() {
  const now = new Date(Date.now());
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function padTwo(n: number) {
  return n.toString().padStart(2, '0');
}

export function toYearMonthDay(d: Date) {
  return `${d.getFullYear()}-${padTwo(d.getMonth() + 1)}-${padTwo(d.getDate())}`;
}

/**
 * Convert date to 'yyyy-mm-dd hh:mm:ss' format
 */
export function toFullTime(d: Date) {
  return `${toYearMonthDay(d)} ${padTwo(d.getHours())}:${padTwo(d.getMinutes())}:${padTwo(d.getSeconds())}`;
}
