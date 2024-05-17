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

export default function TomatoCarousel({ images }: { images: ImageType[] }) {
  return (
    <>
      <Carousel className='mx-auto w-11/12'>
        <CarouselContent className='mx-auto'>
          {images.map((image: ImageType) => (
            <CarouselItem key={image.name} className='basis-1/3'>
              <Image
                className='rounded-xl mx-auto my-auto'
                src={image.src}
                alt={image.name}
                width={1280}
                height={853}
              />
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
