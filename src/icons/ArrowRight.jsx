const ArrowRight = ({ size = '24', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    aria-hidden='true'
    className='ml-1 h-4 w-4 stroke-current'
  >
    <path
      d='M6.75 5.75 9.25 8l-2.5 2.25'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ArrowRight;
