'use client';

import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export default function Print() {
  return (
    <Button
      className='fixed bottom-4 right-4 flex gap-1 print:hidden'
      onClick={() => window.print()}
    >
      <Printer size={14} /> Print
    </Button>
  );
}
