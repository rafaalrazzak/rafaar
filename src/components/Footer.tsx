import Link from 'next/link';

export function Footer() {
  return (
    <footer className='my-4 text-center text-primary-400'>
      Made with ❤️ by{' '}
      <Link
        href='/'
        className='bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text font-semibold text-transparent hover:underline'
      >
        Kita
      </Link>
    </footer>
  );
}
