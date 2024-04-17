import { PropsWithChildren } from 'react';

// best practice to make a overlay svg with css only on a image in tailwind
export function ImageWithOverlayLayers({
  alt,
  src,
  children
}: PropsWithChildren<{ src: string; alt: string }>) {
  return (
    <div className='relative inline-block w-full max-w-full'>
      <img alt={alt} src={src} className='w-full h-auto block' />
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>{children}</div>
    </div>
  );
}
