export function timestampToLocalString (timestamp) {
  if (!timestamp) { return null; }
  let time = timestamp;
  if (timestamp[timestamp.length - 1] !== "Z") { time = timestamp + "Z"; }
  return new Date(time).toLocaleString("en-UK", { hour12: false });
}
