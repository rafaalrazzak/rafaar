import Link from './Link';

export function Footer() {
  return (
    <footer className='my-4 text-center text-muted-foreground'>
      Made with ❤️ by{' '}
      <Link href='/' variant='gradient' size='none'>
        Kita
      </Link>
    </footer>
  );
}
