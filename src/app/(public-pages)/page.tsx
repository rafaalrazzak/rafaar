import Navbar from '@/components/Navbar';

import MainPageClient from './client';

export default async function Page() {
  return (
    <main>
      <Navbar />
      <MainPageClient />
    </main>
  );
}
