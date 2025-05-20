// src/helpers/timeHelper.ts

export const getCurrentWIBDate = (): Date => {
  const localDate = new Date();
  const jakartaTimezoneOffset = 7 * 60; // Jakarta is UTC+7
  const jakartaDate = new Date(
    localDate.getTime() + jakartaTimezoneOffset * 60 * 1000
  );
  return jakartaDate;
};

export const getEndOfMonthDate = (): Date => {
  const localDate = new Date();

  const jakartaTimezoneOffset = 0 * 60;
  const jakartaNow = new Date(
    localDate.getTime() + jakartaTimezoneOffset * 60 * 1000
  );

  const year = jakartaNow.getUTCFullYear();
  const month = jakartaNow.getUTCMonth() + 1;

  const endOfMonthUTC = new Date(Date.UTC(year, month, 0));

  const endOfMonthJakarta = new Date(
    endOfMonthUTC.getTime() + jakartaTimezoneOffset * 60 * 1000
  );

  return endOfMonthJakarta;
};

export const getWeeksInMonthTrimmed = (
  year: number,
  month: number
): Date[][] => {
  const getWIBDate = (
    y: number,
    m: number,
    d: number,
    endOfDay = false
  ): Date => {
    const date = new Date(y, m, d); // otomatis menggunakan waktu lokal (WIB jika servernya di WIB)
    if (endOfDay) {
      date.setHours(23, 59, 59, 999); // set ke akhir hari WIB
    } else {
      date.setHours(0, 0, 0, 0); // set ke awal hari WIB
    }
    return date;
  };

  const lastDay = new Date(year, month, 0).getDate();

  return [
    [getWIBDate(year, month - 1, 1), getWIBDate(year, month - 1, 7, true)],
    [getWIBDate(year, month - 1, 8), getWIBDate(year, month - 1, 14, true)],
    [getWIBDate(year, month - 1, 15), getWIBDate(year, month - 1, 21, true)],
    [
      getWIBDate(year, month - 1, 22),
      getWIBDate(year, month - 1, lastDay, true),
    ],
  ];
};
