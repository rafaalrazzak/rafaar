import { Suspense } from 'react';

import { OverlaySongClient } from './overlay-client';

export default function OverlaySong() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OverlaySongClient />
    </Suspense>
  );
}
