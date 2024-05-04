'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

function ImageGallery({ imagePaths }: { imagePaths: string[] }) {
  const { theme } = useTheme(); // Get the current theme
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  useEffect(() => {
    setCurrentTheme(theme!);
  }, [theme]);

  if (!currentTheme) return null; // Render nothing until theme is initialized

  const filteredImages = imagePaths.filter(image => {
    // Check if the image should be rendered based on the theme and file name convention
    return (
      // For images that don't have 'dark' or 'light' in their names, render them regardless of the theme
      (!image.includes('dark') && !image.includes('light')) ||
      // For images that contain 'dark' or 'light' in their names, render them according to the current theme
      (currentTheme === 'light' && image.includes('^light')) ||
      (currentTheme === 'dark' && image.includes('^dark'))
    );
  });

  return (
    <div className='grid grid-cols-4 md:grid-cols-10 gap-3'>
      {filteredImages.map((image: string, index: number) => (
        <>
          <div
            key={`${image}-${index}`}
            className='rounded-lg border aspect-square border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 flex justify-center items-center position-relative'
          >
            <div className='w-full h-full flex flex-col items-center justify-center relative'>
              <Image
                className='p-1.5 object-fit'
                src={`/technologies/${image}`}
                alt={`Image`}
                layout='fill'
              />
              <div className='md:absolute inset-0 flex items-center justify-center text-white bg-opacity-50 bg-black rounded-lg backdrop-blur opacity-0 transition-opacity duration-300 md:hover:opacity-100'>
                <span className='text-center cursor-default'>
                  {image
                    .replace('dark', '')
                    .replace('light', '')
                    .replace('^', '')
                    .replace('.svg', '')
                    .replace('.png', '')
                    .replace('Zero', '0')}
                </span>
              </div>
              <p className='absolute md:hidden bottom-0 w-full text-center text-sm bg-gray-200/50 dark:bg-slate-800/50'>
                {image
                  .replace('dark', '')
                  .replace('light', '')
                  .replace('^', '')
                  .replace('.svg', '')
                  .replace('.png', '')
                  .replace('Zero', '0')}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default ImageGallery;
