const ArrowDown = ({ size = '24', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    aria-hidden='true'
    className='stroke-primary-400 group-active:stroke-primary-600 dark:group-hover:stroke-primary-50 dark:group-active:stroke-primary-50 h-4 w-4 transition'
  >
    <path
      d='M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ArrowDown;
