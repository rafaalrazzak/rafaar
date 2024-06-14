const Globe = ({ size = '18', ...props }) => (
  <svg
    {...props}
    width={size}
    height={size}
    viewBox='0 0 24 24'
    aria-label='Globe'
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
    className='lucide lucide-globe'
  >
    <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
    <path d='M2 12h20' />
    <circle cx='12' cy='12' r='10' />
  </svg>
);

export default Globe;
