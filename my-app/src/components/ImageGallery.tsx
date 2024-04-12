// Inside your component file

import React from 'react';
import Image from 'next/image';

function ImageGallery() {
  // Import all images from the 'images' folder in the 'public' directory
  const importAll = (r: any) =>
    r.keys().map((fileName: string) => ({
      src: `/technologies/${fileName.split('/').slice(-1)[0]}`, // Directly accessing the file in public/technologies
      fileName: fileName
        .split('/')
        .slice(-1)[0]
        .replace(/\.[^/.]+$/, ''), // Extracting just the filename from the path without extension
    }));

  const imagePaths = importAll(
    require.context('../../public/technologies', false, /\.(png|jpe?g|svg)$/), // Adjusted path
  );

  return (
    <div className='grid grid-cols-8 gap-3'>
      {imagePaths.map(
        (image: { src: string; fileName: string }, index: number) => (
          <div
            key={index}
            className='rounded-lg border aspect-square border-neutral-200 bg-white text-neutral-950 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 flex justify-center items-center position-relative'
            // style={{ aspectRatio: '1' }} // Maintain aspect ratio
          >
            {/* Use next/image component */}
            <div className='w-full h-full flex flex-col items-center justify-center relative'>
              <Image
                className='p-1.5'
                src={image.src}
                alt={`Image ${index}`}
                layout='fill'
                objectFit='contain' // Fill the container while maintaining aspect ratio
              />
              <div
                className={`absolute bottom-0 left-0 right-0 p-1 text-xs font-semibold dark:text-white`}
              >
                {image.fileName}
              </div>
              {/* Blurry overlay */}
              <div className='absolute inset-0 bg-opacity-50 bg-black blur opacity-0 transition-opacity duration-300 hover:opacity-100'></div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default ImageGallery;
