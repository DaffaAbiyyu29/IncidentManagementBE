export const formattedDate = (date: Date | string | null | undefined) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

export const formatWIBDate = (date: Date | string | null | undefined): Date => {
  if (!date) {
    throw new Error('Invalid date input');
  }

  let validDate: Date;

  if (typeof date === 'string') {
    validDate = new Date(date); // Jika string, coba buat objek Date
  } else if (date instanceof Date) {
    validDate = date; // Jika sudah berupa objek Date, pakai langsung
  } else {
    throw new Error('Invalid date format');
  }

  const jakartaTimezoneOffset = 0 * 60; // Jakarta is UTC+7
  const jakartaDate = new Date(
    validDate.getTime() + jakartaTimezoneOffset * 60 * 1000
  );

  return jakartaDate;
};
