/**
 * Shared by the page render and the client script, so the value the browser
 * recomputes is formatted identically to the one baked in at build time.
 */

/** Parse YYYY-MM-DD in local time. `new Date(iso)` would parse as UTC and can
 *  shift the year for viewers west of it. */
function parseDate(value: string): Date {
  const [year, month = 1, day = 1] = value.split("-").map(Number);
  return new Date(year!, month - 1, day);
}

export function startYear(startISO: string): number {
  return parseDate(startISO).getFullYear();
}

/** "3 yrs 3 mos", "1 mo", or "" for anything under a month. */
export function durationSince(startISO: string, endISO?: string): string {
  const start = parseDate(startISO);
  const end = endISO ? parseDate(endISO) : new Date();

  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1;
  if (months < 0) months = 0;

  const years = Math.floor(months / 12);
  const rest = months % 12;

  return [
    years > 0 && `${years} yr${years === 1 ? "" : "s"}`,
    rest > 0 && `${rest} mo${rest === 1 ? "" : "s"}`,
  ]
    .filter(Boolean)
    .join(" ");
}
