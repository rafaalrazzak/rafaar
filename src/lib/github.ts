export interface ContributionDay {
  date: string;
  /** GitHub's own 0-4 intensity bucket. */
  level: number;
  /** Exact contribution count, read from the day's tooltip. */
  count: number;
  /** Column (week) and row (weekday) in the calendar grid. */
  week: number;
  weekday: number;
}

export interface Contributions {
  total: number;
  activeDays: number;
  weeks: number;
  days: ContributionDay[];
}

export interface MonthLabel {
  week: number;
  label: string;
}

/** Calendar geometry, shared by the build render and the client repaint so the
 *  two cannot drift apart. */
export const CALENDAR = {
  cell: 10,
  step: 13,
  rows: 7,
  /** Space reserved above the grid for month labels, and to the left for weekday labels. */
  monthLabelHeight: 14,
  weekdayLabelWidth: 20,
} as const;
export const LEVEL_OPACITY = [0.08, 0.3, 0.5, 0.72, 1] as const;
/** GitHub only labels every other weekday row to avoid clutter. */
export const WEEKDAY_LABELS = [
  { weekday: 1, label: "Mon" },
  { weekday: 3, label: "Wed" },
  { weekday: 5, label: "Fri" },
] as const;

/**
 * One label per month, positioned at the first week column that month
 * appears in. `days` must be sorted by date ascending (parseContributions
 * guarantees this), so the first day seen for a given week is its earliest.
 */
export function monthLabels(days: ContributionDay[]): MonthLabel[] {
  const firstDateOfWeek = new Map<number, string>();
  for (const day of days) {
    if (!firstDateOfWeek.has(day.week)) firstDateOfWeek.set(day.week, day.date);
  }

  const labels: MonthLabel[] = [];
  let prevMonth = -1;
  for (const week of [...firstDateOfWeek.keys()].sort((a, b) => a - b)) {
    const date = new Date(`${firstDateOfWeek.get(week)}T00:00:00Z`);
    const month = date.getUTCMonth();
    if (month === prevMonth) continue;
    prevMonth = month;
    labels.push({ week, label: date.toLocaleString("en-US", { month: "short", timeZone: "UTC" }) });
  }
  return labels;
}

/**
 * Tooltip text for one cell, shared by the build render and the client repaint.
 * Falls back to a countless phrasing if GitHub ever changes its tooltip markup,
 * so a parser drift understates the day rather than claiming it was empty.
 */
export function describeDay(day: ContributionDay): string {
  const date = new Date(`${day.date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  const amount =
    day.count > 0
      ? `${day.count.toLocaleString("en-US")} contribution${day.count === 1 ? "" : "s"}`
      : day.level > 0
        ? "Contributions"
        : "No contributions";
  return `${amount} on ${date}`;
}

export const CONTRIBUTIONS_URL = (user: string) => `https://github.com/users/${user}/contributions`;

const DAY_MS = 86_400_000;

/**
 * Parse GitHub's contribution calendar page.
 *
 * Kept separate from fetching so the same parser runs at build time (Node) and
 * inside the Cloudflare Function that serves /api/contributions.
 */
export function parseContributions(html: string): Contributions | null {
  const total = Number(
    /([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year/.exec(html)?.[1]?.replace(/,/g, ""),
  );
  // The exact per-day count only exists in the visually-hidden tooltip that
  // GitHub links to each cell by id, so index those first.
  const counts = new Map<string, number>();
  for (const [, id, text] of html.matchAll(
    /<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g,
  )) {
    const count = /^([\d,]+)\s+contribution/.exec(text!.trim())?.[1];
    counts.set(id!, count ? Number(count.replace(/,/g, "")) : 0);
  }

  const cells = [...html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"([^>]*)/g)].flatMap(
    ([, date, attrs]) => {
      const level = /data-level="(\d)"/.exec(attrs!)?.[1];
      if (level === undefined) return [];
      const id = /\bid="([^"]+)"/.exec(attrs!)?.[1];
      return [{ date: date!, level: Number(level), count: (id && counts.get(id)) || 0 }];
    },
  );

  if (!Number.isFinite(total) || total <= 0 || cells.length === 0) return null;

  // Cells arrive grouped by weekday, not by date, so derive the grid position
  // from the date itself rather than from the order they appear in.
  cells.sort((a, b) => a.date.localeCompare(b.date));
  const first = Date.parse(cells[0]!.date);
  const firstWeekday = new Date(first).getUTCDay();

  const days = cells.map(({ date, level, count }) => {
    const offset = Math.round((Date.parse(date) - first) / DAY_MS) + firstWeekday;
    return { date, level, count, week: Math.floor(offset / 7), weekday: offset % 7 };
  });

  return {
    total,
    activeDays: days.filter((d) => d.level > 0).length,
    weeks: days[days.length - 1]!.week + 1,
    days,
  };
}

/**
 * Contribution totals count private and organisation work, which is where most
 * of the real activity lives - the public repo and star counts do not reflect it.
 *
 * Read at build time so the section renders without JavaScript. The endpoint
 * sends no CORS headers, so the browser cannot call it directly; /api/contributions
 * proxies it for the live refresh. Returns null on any failure so a GitHub outage
 * cannot break the build.
 */
export async function fetchContributions(user: string): Promise<Contributions | null> {
  try {
    const res = await fetch(CONTRIBUTIONS_URL(user), {
      headers: { "user-agent": "rafaar.com build" },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return null;
    return parseContributions(await res.text());
  } catch {
    return null;
  }
}
