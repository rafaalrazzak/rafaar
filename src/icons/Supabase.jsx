const Supabase = ({ size = '24', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='#3ECF8E'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M19.765 9.354h-9.363V.396a.396.396 0 0 0-.716-.233L.606 12.424l-.402.562a1.04 1.04 0 0 0 .836 1.66h9.362v8.958a.396.396 0 0 0 .716.233L20.2 11.576l.4-.562a1.04 1.04 0 0 0-.835-1.66Z' />
  </svg>
);

export default Supabase;
