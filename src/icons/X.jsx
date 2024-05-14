const X = ({ size = '24', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M17.56 3.27h2.96l-6.47 7.4 7.62 10.07h-5.96l-4.67-6.11-5.34 6.11H2.72l6.92-7.92-7.3-9.55h6.11l4.22 5.58 4.88-5.58zm-1.04 15.69h1.64L7.56 4.95H5.8l10.72 14.01z'></path>
  </svg>
);

export default X;
