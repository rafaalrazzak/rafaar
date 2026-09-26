const UPSTREAM = "https://api.rin.ci/api/now-playing";
const TTL = 15;

/**
 * Same-origin proxy for the now-playing API, so the page needs no CORS grant
 * from the API. Edge-cached briefly: the API itself only refreshes Last.fm
 * every 15s, so visitors polling faster would gain nothing.
 */
interface Context {
  request: Request;
  waitUntil: (promise: Promise<unknown>) => void;
}

export const onRequestGet = async ({ request, waitUntil }: Context): Promise<Response> => {
  const cache = (caches as unknown as { default: Cache }).default;
  const key = new Request(new URL(request.url).origin + "/api/now-playing", request);

  const hit = await cache.match(key);
  if (hit) return hit;

  const upstream = await fetch(UPSTREAM, { headers: { "user-agent": "rafaar.com" } });
  if (!upstream.ok) return new Response(null, { status: 502 });

  const body = (await upstream.json()) as { data?: { current?: unknown } };
  const res = new Response(JSON.stringify({ current: body.data?.current ?? null }), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": `public, max-age=${TTL}, s-maxage=${TTL}`,
    },
  });

  waitUntil(cache.put(key, res.clone()));
  return res;
};
