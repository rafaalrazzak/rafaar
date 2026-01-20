/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@astrojs/cloudflare" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
