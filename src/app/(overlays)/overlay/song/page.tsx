'use client';
import { useSearchParams } from 'next/navigation';

import NowPlayingClient from '../../../(public-pages)/songs/now-playing-client';

export default function OverlaySong() {
  const searchParams = useSearchParams();

  const isDisabledLyrics = searchParams.get('disabledLyrics');

  return <NowPlayingClient showLyrics={!isDisabledLyrics} />;
}
