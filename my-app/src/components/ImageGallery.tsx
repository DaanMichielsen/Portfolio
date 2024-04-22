'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { ImagePath } from '@/app/about-me/page';

function ImageGallery({ imagePaths }: { imagePaths: ImagePath[] }) {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className='grid grid-cols-4 md:grid-cols-6 gap-3'>
      {imagePaths.map(
        (image: { src: string; fileName: string }, index: number) => {
          // Check if the image should be rendered based on the theme and file name convention
          const shouldRender =
            (theme === 'light' && !image.fileName.includes('^dark')) ||
            (theme === 'dark' && !image.fileName.includes('^light'));

          // Render the image only if it meets the conditions
          return shouldRender ? (
            <div
              key={`index-${index}`}
              className='rounded-lg border aspect-square border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 flex justify-center items-center position-relative'
            >
              <div className='w-full h-full flex flex-col items-center justify-center relative'>
                <Image
                  className='p-1.5 object-fit'
                  src={image.src}
                  alt={`Image ${index}`}
                  layout='fill'
                />
                <div className='absolute inset-0 flex items-center justify-center text-white bg-opacity-50 bg-black rounded-lg backdrop-blur opacity-0 transition-opacity duration-300 hover:opacity-100'>
                  <span className='text-center'>
                    {image.fileName
                      .replace('dark', '')
                      .replace('light', '')
                      .replace('^', '')}
                  </span>
                </div>
              </div>
            </div>
          ) : null;
        },
      )}
    </div>
  );
}

export default ImageGallery;
