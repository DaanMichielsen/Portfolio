'use client';
import { Image as ImageType } from '@/components/common/ImageGallery';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function StreamlitCarousel({ images }: { images: ImageType[] }) {
  return (
    <>
      <Carousel className='mx-auto'>
        <CarouselContent>
          {images.map((image: ImageType) => (
            <CarouselItem key={image.name}>
              <Image
                className='rounded-xl mx-auto my-auto'
                src={image.src}
                alt={image.name}
                width={1280}
                height={853}
              />
              {image.name === 'Prediction' && (
                <p className='text-gray-500 text-center dark:text-slate-300'>
                  *Google has no result in this screenshot because the API has
                  been offline for a while and I am out of credits*
                </p>
              )}
              <p className='font-bold text-center'>{image.name}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
