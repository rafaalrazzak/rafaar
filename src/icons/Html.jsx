const HTML = ({ size = '24', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M0 0h21l-1.91 21.563L10.477 24l-8.564-2.438L0 0Zm7.031 9.75-.232-2.718 10.059.003.23-2.622L3.912 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H4.748l.33 4.171 5.422 1.45 5.379-1.443.744-8.157H7.031V9.75Z' />
  </svg>
);

export default HTML;
