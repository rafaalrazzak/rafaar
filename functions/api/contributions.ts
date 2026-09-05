import { CONTRIBUTIONS_URL, parseContributions } from "../../src/lib/github";

const USER = "rafaalrazzak";
const TTL = 3600;

/**
 * Same-origin proxy for the GitHub contribution calendar.
 *
 * GitHub's calendar page sends no Access-Control-Allow-Origin, so the browser
 * cannot fetch it directly. This serves the parsed result from our own origin
 * instead, edge-cached for an hour so visitors do not each hit GitHub.
 */
interface Context {
  request: Request;
  waitUntil: (promise: Promise<unknown>) => void;
}

export const onRequestGet = async ({ request, waitUntil }: Context): Promise<Response> => {
  const cache = (caches as unknown as { default: Cache }).default;
  const key = new Request(new URL(request.url).origin + "/api/contributions", request);

  const hit = await cache.match(key);
  if (hit) return hit;

  const upstream = await fetch(CONTRIBUTIONS_URL(USER), {
    headers: { "user-agent": "rafaar.com" },
  });
  if (!upstream.ok) return new Response(null, { status: 502 });

  const data = parseContributions(await upstream.text());
  if (!data) return new Response(null, { status: 502 });

  const res = new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": `public, max-age=300, s-maxage=${TTL}`,
    },
  });

  waitUntil(cache.put(key, res.clone()));
  return res;
};
