export default function getDateInTZ(date, tz) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    fractionalSecondDigits: 3,
    timeZone: tz,
  });
  const localDate = new Date(date);
  const localDateAtTZ = new Date(formatter.format(localDate));
  const tzOffset = localDate.getTime() - localDateAtTZ.getTime();
  return new Date(localDate.getTime() + tzOffset);
}
