export default function getDateInTZ(date, tz) {
  const localDate = new Date(date);
  const localDateAtTZ = new Date(
    localDate.toLocaleString("en-US", {
      timeZone: tz,
    })
  );
  const tzOffset = localDate.getTime() - localDateAtTZ.getTime();
  return new Date(localDate.getTime() + tzOffset);
}
