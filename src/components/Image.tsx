import clsx from 'clsx';
import NextImage from 'next/image';

import { ImageProps } from 'next/image';

function Image({ ...rest }: ImageProps) {
  return <NextImage {...rest} />;
}

export default Image;
