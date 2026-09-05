export interface ContributionDay {
  date: string;
  /** GitHub's own 0-4 intensity bucket. */
  level: number;
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

/** Calendar geometry, shared by the build render and the client repaint so the
 *  two cannot drift apart. */
export const CALENDAR = { cell: 10, step: 13, rows: 7 } as const;
export const LEVEL_OPACITY = [0.08, 0.3, 0.5, 0.72, 1] as const;

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
  const cells = [...html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g)].map(
    ([, date, level]) => ({ date: date!, level: Number(level) }),
  );

  if (!Number.isFinite(total) || total <= 0 || cells.length === 0) return null;

  // Cells arrive grouped by weekday, not by date, so derive the grid position
  // from the date itself rather than from the order they appear in.
  cells.sort((a, b) => a.date.localeCompare(b.date));
  const first = Date.parse(cells[0]!.date);
  const firstWeekday = new Date(first).getUTCDay();

  const days = cells.map(({ date, level }) => {
    const offset = Math.round((Date.parse(date) - first) / DAY_MS) + firstWeekday;
    return { date, level, week: Math.floor(offset / 7), weekday: offset % 7 };
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
