import { today, toFullTime, toYearMonthDay } from './date';

describe('date', () => {
  beforeEach(() => {
    const now = jest.spyOn(Date, 'now');
    now.mockReturnValue(new Date(2018, 5, 2, 16, 13).getTime());
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('today', () => {
    expect(today()).toEqual(new Date(2018, 5, 2));
  });
});

it('toYearMonthDay', () => {
  expect(toYearMonthDay(new Date(2018, 7, 5))).toBe('2018-08-05');
});

it('toFullTime', () => {
  expect(toFullTime(new Date(2018, 8, 5, 9, 8, 5))).toBe('2018-09-05 09:08:05');
});
