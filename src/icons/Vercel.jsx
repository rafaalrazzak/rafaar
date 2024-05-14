const Vercel = ({ size = '24', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='#000'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M24 24H0L12 0l12 24Z' />
  </svg>
);

export default Vercel;
