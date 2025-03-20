export const formattedDate = (date: Date | string | null | undefined) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};
